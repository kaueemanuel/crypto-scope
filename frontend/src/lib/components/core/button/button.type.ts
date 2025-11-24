import { CSSProperties } from 'react'

export enum ButtonVariantEnum {
  primary = 'primary',
  secondary = 'secondary',
  ghost = 'ghost',
  danger = 'danger',
  info = 'info',
  light = 'light',
  'danger-light' = 'danger-light',
  'success-light' = 'success-light',
  'info-light' = 'info-light',
  'primary-outline' = 'primary-outline',
  'danger-outline' = 'danger-outline',
}

export enum ButtonSizeEnum {
  xsmall = 'xsmall',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum ButtonModelEnum {
  pill = 'pill',
  default = 'default',
  square = 'square',
  round = 'round',
}

export interface ButtonProps {
  href?: string
  target?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: keyof typeof ButtonVariantEnum
  size?: keyof typeof ButtonSizeEnum
  isActive?: boolean
  isLoading?: boolean
  model?: keyof typeof ButtonModelEnum
  title?: string
  onClickCapture?: () => void
  style?: CSSProperties
}
