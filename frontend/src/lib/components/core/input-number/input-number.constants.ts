import styles from './input-number.module.css'

import {
  InputNumberVariantEnum,
  InputNumberSizeEnum,
} from './input-number.type'

export const sizes: Record<InputNumberSizeEnum, string> = {
  small: styles['size-small'],
  medium: styles['size-medium'],
  large: styles['size-large'],
}

export const disabledClasses = {
  enabled: styles.enabled,
  disabled: styles.disabled,
}

export const variants: Record<InputNumberVariantEnum, string> = {
  primary: styles['variant-primary'],
  info: styles['variant-info'],
  danger: styles['variant-danger'],
}

export const generateClasses = (
  size: keyof typeof InputNumberSizeEnum,
  isCenter?: boolean,
  error?: boolean,
  disabled?: boolean,
  variant?: keyof typeof InputNumberVariantEnum,
) => {
  const variantClass = variant ? variants[error ? 'danger' : variant] : ''

  return `${styles.core} ${sizes[size]} ${isCenter ? styles.centered : ''} ${variantClass} ${disabledClasses[disabled ? 'disabled' : 'enabled']}`
}
