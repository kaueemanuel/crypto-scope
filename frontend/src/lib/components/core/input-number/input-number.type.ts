import { KeyboardEvent, ReactNode, RefObject } from 'react'

export enum InputNumberSizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum InputNumberVariantEnum {
  primary = 'primary',
  info = 'info',
  danger = 'danger',
}

export interface InputNumberProps {
  className?: string
  disabled?: boolean
  size?: keyof typeof InputNumberSizeEnum
  onChange?: (value: number | string) => void
  value?: number | string
  placeholder?: string
  error?: string
  onBlur?: () => void
  prefix?: string
  suffix?: string
  locale?: Intl.LocalesArgument
  decimalPrecision?: number
  stepSize?: number
  showIcons?: boolean
  name?: string
  min?: number
  ref?: RefObject<HTMLInputElement>
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  variant?: keyof typeof InputNumberVariantEnum
  iconLeft?: ReactNode
  iconRight?: ReactNode
}
