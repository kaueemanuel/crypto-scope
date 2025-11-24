"use client"

import { useCoinById } from '@/services';
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function CoinDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { data, isLoading } = useCoinById(id);

  const t = useTranslations();

  if (!data || isLoading) return <div style={{padding:24}}>{t('loading')}</div>;

  // Mock data for chart (em um app real, buscaria histórico)
  const chartData = {
    labels: t('chart.months') as unknown as string[] || ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
      {
        label: t('crypto.price') as string || 'Price',
        data: [100, 120, 110, 130, 125, data.current_price],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div style={{padding:24}}>
      <button onClick={() => router.back()} style={{marginBottom:16}}>{t('crypto.back')}</button>

      <h1>{data.name} ({data.symbol.toUpperCase()})</h1>

      <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:24}}>
        <div>
          <h2>{t('crypto.info')}</h2>
          <p>{t('crypto.price')}: ${data.current_price.toFixed(2)}</p>
          <p>{t('crypto.market_cap')}: ${(data.market_cap / 1e9).toFixed(2)}B</p>
          <p style={{color: data.change_24h >= 0 ? 'green' : 'red'}}>
            {t('crypto.change_24h')}: {data.change_24h?.toFixed(2)}%
          </p>
        </div>

        <div>
          <h2>{t('crypto.chart')}</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}