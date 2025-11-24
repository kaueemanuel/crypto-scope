"use client"

import { usePrices } from '@/services';
import { useState } from 'react';
import { CryptoCard } from '../components/crypto-card/crypto-card';
import { SearchBar } from '../components/search-bar/search-bar';

export default function Home() {
  const [search, setSearch] = useState('');


  const { data: cryptos, isLoading, error } = usePrices();

  const filteredCryptos = cryptos?.data?.filter?.(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar dados</div>;

  return (
    <div>
      <h1>CryptoScope Dashboard</h1>


      <SearchBar value={search} onChange={setSearch} />

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:16}}>
        {filteredCryptos?.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
}