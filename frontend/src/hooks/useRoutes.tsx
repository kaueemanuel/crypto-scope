"use client"

import { ROUTES as ROUTES_CONST } from "@/constants";
import { useLocale } from "next-intl";

export function useRoutes() {
  const locale = useLocale();

  const injectLocale = (path: string) => `/${locale}${path}`;

  return {
    HOME: injectLocale(ROUTES_CONST.HOME),
    COINS: {
      LIST: injectLocale(ROUTES_CONST.COINS.LIST),
      DETAIL: (id: string | number) =>  injectLocale(ROUTES_CONST.COINS.DETAIL(id)),
    },
  } as const;
}
