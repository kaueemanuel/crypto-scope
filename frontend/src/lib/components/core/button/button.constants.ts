import styles from './button.module.css'

import {
  ButtonModelEnum,
  ButtonSizeEnum,
  ButtonVariantEnum,
} from './button.type'

export const sizes: Record<ButtonSizeEnum, string> = {
  xsmall: styles['size-xsmall'],
  small: styles['size-small'],
  medium: styles['size-medium'],
  large: styles['size-large'],
}

export const variantsStandard: Record<ButtonVariantEnum, string> = {
  primary: styles['variant-primary'],
  secondary: styles['variant-secondary'],
  ghost: styles['variant-ghost'],
  danger: styles['variant-danger'],
  info: styles['variant-info'],
  light: styles['variant-light'],
  'danger-light': styles['variant-danger-light'],
  'success-light': styles['variant-success-light'],
  'info-light': styles['variant-info-light'],
  'primary-outline': styles['variant-primary-outline'],
  'danger-outline': styles['variant-danger-outline'],
}

export const variantsActives: Record<ButtonVariantEnum, string> = {
  primary: styles['variant-primary'],
  secondary: styles['variant-secondary-active'],
  ghost: styles['variant-ghost-active'],
  danger: styles['variant-danger'],
  info: styles['variant-info'],
  light: styles['variant-light-active'],
  'danger-light': styles['variant-danger-light'],
  'success-light': styles['variant-success-light'],
  'info-light': styles['variant-info-light'],
  'primary-outline': styles['variant-primary-outline'],
  'danger-outline': styles['variant-danger-outline'],
}

export const models: Record<ButtonModelEnum, string> = {
  pill: styles['model-pill'],
  default: styles['model-default'],
  square: styles['model-square'],
  round: styles['model-round'],
}

export const compousedVariants = {
  standard: variantsStandard,
  active: variantsActives,
}

export const generateClasses = (
  size: keyof typeof ButtonSizeEnum,
  variant: keyof typeof ButtonVariantEnum,
  model: keyof typeof ButtonModelEnum,
  isActive?: boolean,
  className?: string,
) => {
  let variants = compousedVariants.standard

  if (isActive) {
    variants = compousedVariants.active
  }

  return `${styles.core} ${sizes[size]} ${variants[variant]} ${models[model]} ${className}`
}
