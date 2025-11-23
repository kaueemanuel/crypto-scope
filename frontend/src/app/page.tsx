"use client"

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  change_24h: number;
}

export default function Home() {
  const [search, setSearch] = useState('');

  const { data: cryptos, isLoading, error } = useQuery({
    queryKey: ['prices'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/prices');
      if (!response.ok) throw new Error('Failed to fetch prices');
      return response.json() as Promise<{data: Crypto[]}>;
    },
    refetchInterval: 60000, // Refetch every minute
  });

  const filteredCryptos = cryptos?.data?.filter?.(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div style={{padding:24}}>Carregando...</div>;
  if (error) return <div style={{padding:24}}>Erro ao carregar dados</div>;

  return (
    <div style={{padding:24}}>
      <h1>CryptoPulse Dashboard</h1>

      <input
        type="text"
        placeholder="Buscar criptomoeda..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{padding:8, marginBottom:16, width:'100%', maxWidth:400}}
      />

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:16}}>
        {filteredCryptos?.map((crypto) => (
          <Link key={crypto.id} href={`/coins/${crypto.id}`} style={{textDecoration:'none', color:'inherit'}}>
            <div style={{border:'1px solid #ccc', padding:16, borderRadius:8, cursor:'pointer'}}>
              <h3>{crypto.name} ({crypto.symbol.toUpperCase()})</h3>
              <p>Preço: ${crypto.current_price.toFixed(2)}</p>
              <p>Market Cap: ${(crypto.market_cap / 1e9).toFixed(2)}B</p>
              <p style={{color: crypto.change_24h >= 0 ? 'green' : 'red'}}>
                24h: {crypto.change_24h?.toFixed(2)}%
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}