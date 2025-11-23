"use client"

import { useQuery } from '@tanstack/react-query';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { useParams, useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  price: number;
  market_cap: number;
  change_24h: number;
}

export default function CoinDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data: cryptos } = useQuery({
    queryKey: ['prices'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/prices');
      if (!response.ok) throw new Error('Failed to fetch prices');
      return response.json() as Promise<Crypto[]>;
    },
  });

  const coin = cryptos?.find(c => c.id === id);

  if (!coin) return <div style={{padding:24}}>Carregando...</div>;

  // Mock data for chart (in a real app, you'd fetch historical data)
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Price',
        data: [100, 120, 110, 130, 125, coin.price],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{padding:24}}>
      <button onClick={() => router.back()} style={{marginBottom:16}}>← Voltar</button>

      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>

      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:24}}>
        <div>
          <h2>Informações</h2>
          <p>Preço atual: ${coin.price.toFixed(2)}</p>
          <p>Market Cap: ${(coin.market_cap / 1e9).toFixed(2)}B</p>
          <p style={{color: coin.change_24h >= 0 ? 'green' : 'red'}}>
            Variação 24h: {coin.change_24h?.toFixed(2)}%
          </p>
        </div>

        <div>
          <h2>Gráfico de Preços</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}