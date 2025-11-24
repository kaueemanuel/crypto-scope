"use client"

import { useRoutes } from '@/hooks';
import { Text } from "@/lib";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { CardLink, PriceChange } from "./coin-card.styles";
import { CoinCardProps } from './coin-card.types';

export function CoinCard({ coin }: CoinCardProps) {
  const t = useTranslations("home_page");
  const routes = useRoutes();
  return (
    <Link href={routes.COINS.DETAIL(coin.id)}>
      <CardLink>
        <Image src={coin.image} alt={`${coin.image}-coin-image`} width={25} height={25} />
        <div>
          <Text variant="title-medium" className="title">
            {coin.name} ({coin.symbol.toUpperCase()})
          </Text>
          <Text>{t('coin_card.price')}: ${coin.current_price.toFixed(2)}</Text>
          <Text>{t('coin_card.market_cap')}: ${(coin.market_cap / 1e9).toFixed(2)}B</Text>
          <PriceChange positive={coin.change_24h >= 0}>
            {t('coin_card.change_24h')}: {coin.change_24h?.toFixed(2)}%
          </PriceChange>
        </div>
      </CardLink>
    </Link>
  );
}
