'use client'
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '../../../icons'
import { Text } from '../text'

import { InputProps, InputSizeEnum } from './input.type'

import { ErrorText, LeftIcon, RightIcon, StyledInput } from './input.styles'

export const Input = ({
  className,
  disabled,
  onChange,
  size = InputSizeEnum.medium,
  value = '',
  iconLeft,
  iconRight,
  placeholder,
  id,
  type = 'text',
  error,
  isTextArea = false,
  onBlur,
  onClick,
  onKeyDown,
  onKeyDownTextArea,
  ref,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const onHandleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={className}>
      <StyledInput size={size} error={!!error}>
        {iconLeft && <LeftIcon size={size}>{iconLeft}</LeftIcon>}
        {isTextArea ? (
          <textarea
            disabled={disabled}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              !disabled && onChange && onChange(e.target.value)
            }
            value={value}
            placeholder={placeholder}
            id={id}
            onBlur={onBlur}
            onClick={onClick}
            onKeyDown={onKeyDownTextArea}
          />
        ) : (
          <input
            disabled={disabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              !disabled && onChange && onChange(e.target.value)
            }
            value={value}
            placeholder={placeholder}
            id={id}
            type={showPassword && type === 'password' ? 'text' : type}
            onBlur={onBlur}
            onClick={onClick}
            onKeyDown={onKeyDown}
            ref={ref}
          />
        )}
        {type === 'password' && (
          <RightIcon size={size}>
            <button
              type="button"
              onClick={onHandleShowPassword}
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </RightIcon>
        )}
        {iconRight && <RightIcon size={size}>{iconRight}</RightIcon>}
      </StyledInput>
      {error && <ErrorText><Text>{error}</Text></ErrorText>}
    </div>
  )
}
