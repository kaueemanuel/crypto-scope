"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";
import enUS from '../../locales/en-US.json';
import ptBR from '../../locales/pt-BR.json';

const queryClient = new QueryClient()

export function Providers({ children, locale = "en-US" }: { children: React.ReactNode, locale?: string }) { 
  const messages = locale === 'pt-BR' ? ptBR : enUS;

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider locale={locale} messages={messages as any} timeZone={"America/Sao_Paulo"}>
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  )
}