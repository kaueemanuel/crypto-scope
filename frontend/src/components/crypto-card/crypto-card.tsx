import { Text } from "@/lib";
import Link from "next/link";
import { Crypto } from "../../types/crypto.type";
import { CardLink, PriceChange } from "./crypto-card.styles";

interface Props {
  crypto: Crypto;
}

export function CryptoCard({ crypto }: Props) {
  return (
    <Link href={`/coins/${crypto.id}`}>
      <CardLink>
        <div>
          <Text variant="title-large" className="title">
            {crypto.name} ({crypto.symbol.toUpperCase()})
          </Text>
          <Text>Preço: ${crypto.current_price.toFixed(2)}</Text>
          <Text>Market Cap: ${(crypto.market_cap / 1e9).toFixed(2)}B</Text>
          <PriceChange positive={crypto.change_24h >= 0}>
            24h: {crypto.change_24h?.toFixed(2)}%
          </PriceChange>
        </div>
      </CardLink>
    </Link>
  );
}
