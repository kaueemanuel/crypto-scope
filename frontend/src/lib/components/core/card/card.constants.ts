import styles from './card.module.css'

import { CardVariantEnum } from './card.type'

export const variants: Record<CardVariantEnum, string> = {
  base: styles['variant-base'],
  primary: styles['variant-primary'],
  whatsapp: styles['variant-whatsapp'],
  link: styles['variant-link'],
}

export const generateClasses = (
  variant: keyof typeof CardVariantEnum,
  className?: string,
) => {
  return `${styles.core} ${variants[variant]} ${className}`
}
