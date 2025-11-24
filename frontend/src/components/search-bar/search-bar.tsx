import { Input } from "@/lib";


interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <Input
      type="text"
      placeholder="Buscar criptomoeda..."
      value={value}
      onChange={(value) => onChange(value)}
    />
  );
}
