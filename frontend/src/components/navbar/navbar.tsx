'use client'

import { Text } from "@/lib"
import { useLocale } from "next-intl"
import { ButtonLink, StyledNavbar } from "./navbar.styles"
import { NavbarProps } from "./navbar.types"

export const Navbar = ({  }: NavbarProps) => {
  const locale = useLocale()

  const changeLocale = (newLocale: string) => {
    const url = new URL(window.location.href);
    url.pathname = url.pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = url.toString();
  }


  return (
    <StyledNavbar>
      <Text variant="title-base">Crypto Scope</Text>
      <div className="lang-box">
        <ButtonLink variant="ghost" onClick={()=> changeLocale("en-US")} active={locale === "en-US"}>en-US</ButtonLink>
        <ButtonLink variant="ghost" onClick={()=> changeLocale("pt-BR")} active={locale === "pt-BR"}>pt-BR</ButtonLink>
      </div>
    </StyledNavbar>
  )
}
