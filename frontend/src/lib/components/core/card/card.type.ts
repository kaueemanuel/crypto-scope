import { MouseEventHandler } from 'react'

export enum CardVariantEnum {
  base = 'base',
  primary = 'primary',
  whatsapp = 'whatsapp',
  link = 'link',
}

export interface CardProps {
  children?: React.ReactNode
  className?: string
  variant?: keyof typeof CardVariantEnum
  onClick?: MouseEventHandler<HTMLElement>
}
