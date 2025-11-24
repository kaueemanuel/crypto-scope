"use client"

import { useParams } from '@/hooks';
import { useCoins } from '@/services';
import { CoinParams } from '@/types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { CoinCard, SearchBar } from './_components';

export default function Home() {
  const t = useTranslations("home_page");
  const [search, setSearch] = useState('');

  const {params, setParams} = useParams({ limit: 100, order_by: 'market_cap_desc' });


  const { data: cryptos, isLoading, error } = useCoins(params as CoinParams);

  const filteredCryptos = cryptos?.data?.filter?.(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>{t('loading')}</div>;
  if (error) return <div>{t('error_loading')}</div>;

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />

      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:16}}>
        {filteredCryptos?.map((crypto) => (
          <CoinCard key={crypto.id} coin={crypto} />
        ))}
      </div>
    </div>
  );
}