import styles from './input.module.css'

import { InputSizeEnum } from './input.type'

export const sizes: Record<InputSizeEnum, string> = {
  small: styles['size-small'],
  medium: styles['size-medium'],
  large: styles['size-large'],
}

export const generateClasses = (
  size: keyof typeof InputSizeEnum,
  error?: boolean,
) => {
  return `${styles.core} ${sizes[size]} ${!error || styles['state-danger']}`
}
