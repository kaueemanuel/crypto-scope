import { ReactNode, KeyboardEvent, RefObject } from 'react'

export enum InputSizeEnum {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export interface InputProps {
  id?: string
  className?: string
  disabled?: boolean
  size?: keyof typeof InputSizeEnum
  onChange?: (value: string) => void
  value?: string

  placeholder?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  type?: string
  error?: string
  isTextArea?: boolean
  onBlur?: () => void
  onClick?: () => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
  onKeyDownTextArea?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  ref?: RefObject<HTMLInputElement>
}
