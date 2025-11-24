import { RefObject } from 'react'

export interface SwitchProps {
  className?: string
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
  id?: string
  ref?: RefObject<HTMLInputElement>
  error?: string
}
