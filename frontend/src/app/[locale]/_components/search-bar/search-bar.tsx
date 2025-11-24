import { Input } from "@/lib";
import { useTranslations } from "next-intl";
import { SearchBarProps } from "./search-bar.types";

export function SearchBar({ value, onChange }: SearchBarProps) {
  const t = useTranslations("home_page");
  return (
    <Input
      type="text"
      placeholder={t('search_placeholder') as string}
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
}
