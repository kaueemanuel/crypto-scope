'use client'
import { useEffect, useState } from 'react'
import { Text } from '../text'

import { MinusIcon, PlusIcon } from '../../../icons'

import { InputNumberProps, InputNumberVariantEnum } from './input-number.type'

import { ErrorText, LeftIcon, RightIcon, StyledInputNumber } from './input-number.styles'

export const InputNumber = ({
  className,
  disabled,
  onChange,
  size = 'medium',
  value,
  placeholder,
  error,
  onBlur,
  prefix = '',
  suffix = '',
  locale = 'es-MX',
  decimalPrecision = 2,
  showIcons,
  stepSize = 1,
  name,
  min,
  ref,
  onKeyDown,
  variant = InputNumberVariantEnum.primary,
  iconLeft,
  iconRight,
}: InputNumberProps) => {
  const [localValue, setLocalValue] = useState('')

  const divisor = Math.pow(10, decimalPrecision)

  const cleanInput = (input: string) => {
    let cleaned = input
    if (prefix) {
      cleaned = cleaned.replace(prefix, '')
    }
    if (suffix) {
      cleaned = cleaned.replace(suffix, '')
    }
    cleaned = cleaned.replace(/\D/g, '')
    return cleaned
  }

  const formatNumber = (num: string) => {
    if (num === '') return num

    const isNegative = num.startsWith('-')
    let cleaned = cleanInput(num)

    if (isNegative && cleaned !== '') {
      cleaned = '-' + cleaned
    }

    let numValue = parseInt(cleaned, 10) / divisor
    if (Number.isNaN(numValue)) numValue = 0

    numValue = parseFloat(numValue.toFixed(decimalPrecision))

    return (
      prefix +
      numValue.toLocaleString(locale, {
        minimumFractionDigits: decimalPrecision,
        maximumFractionDigits: decimalPrecision,
      }) +
      suffix
    )
  }

  useEffect(() => {
    if (value !== undefined) {
      const cleaned = cleanInput(localValue)

      let numValue = parseInt(cleaned, 10) / divisor
      if (Number.isNaN(numValue)) numValue = 0

      numValue = parseFloat(numValue.toFixed(decimalPrecision))

      if (value !== numValue)
        setLocalValue(
          formatNumber(`${Math.round((value as number) * divisor)}`),
        )
    } else {
      setLocalValue('')
    }
  }, [value, prefix, suffix, divisor, decimalPrecision, locale])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const cleaned = cleanInput(e.target.value)
    const numValue = cleaned === '' ? 0 : parseInt(cleaned, 10)

    if (min !== undefined && numValue < min) {
      return
    }

    setLocalValue(formatNumber(cleaned))

    if (onChange) {
      onChange(numValue / divisor)
    }

    setTimeout(() => {
      if (e?.target && e?.target?.setSelectionRange) {
        const newPosition = e.target.value.length - suffix.length
        e.target.setSelectionRange(newPosition, newPosition)
      }
    }, 0)
  }

  const onClickLess = () => {
    if (disabled) return

    if (min !== undefined && ((value as number) || 0) - stepSize < min) return

    onChange && !disabled && onChange(+((value as number) || 0) - stepSize)
  }

  const onClickMore = () => {
    if (disabled) return

    onChange && !disabled && onChange(+(value || 0) + stepSize)
  }

  return (
    <div className={className}>
      <StyledInputNumber
        size={size}
        showIcons={showIcons}
        error={!!error}
        disabled={disabled}
        variant={variant}
        onBlur={onBlur}
      >
        {iconLeft && <LeftIcon>{iconLeft}</LeftIcon>}
        {showIcons && (
          <LeftIcon>
            <button
              onClick={onClickLess}
              aria-label="decrement button"
              disabled={disabled}
            >
              <MinusIcon />
            </button>
          </LeftIcon>
        )}
        <input
          type="text"
          disabled={disabled}
          onChange={handleChange}
          value={localValue}
          placeholder={placeholder}
          onBlur={onBlur}
          name={name}
          aria-label={name}
          ref={ref}
          onKeyDown={onKeyDown}
        />
        {showIcons && (
          <RightIcon>
            <button
              onClick={onClickMore}
              aria-label="increment button"
              disabled={disabled}
            >
              <PlusIcon />
            </button>
          </RightIcon>
        )}
        {iconRight && <RightIcon>{iconRight}</RightIcon>}
      </StyledInputNumber>
      {error && <ErrorText><Text>{error}</Text></ErrorText>}
    </div>
  )
}
