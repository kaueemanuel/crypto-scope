import { ToastProps, ToastVariantEnum } from './toast.type'

import styles from './toast.module.css'

const variantsClasses: Record<keyof typeof ToastVariantEnum, string> = {
  default: styles.default,
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  error: styles.error,
}

const getEnterClass = (position?: ToastProps['position']) => {
  if (position === 'top-center') return styles['slide-in-top-center']
  if (position === 'bottom-center') return styles['slide-in-bottom-center']
  if (position?.includes('left')) return styles['slide-in-left']
  if (position?.includes('right')) return styles['slide-in-right']
  return 'slide-in-center'
}

const getCloseClass = (position?: ToastProps['position']) => {
  if (position?.includes('top')) return styles['fade-out-top']
  if (position?.includes('bottom')) return styles['fade-out-bottom']
  return 'slide-in-center'
}

export const getToastClasses = (
  variant: keyof typeof ToastVariantEnum,
  position?: ToastProps['position'],
  closing?: boolean,
  className: string = '',
) => {
  return `${styles.toast} ${variantsClasses[variant]} ${getEnterClass(position)} ${closing ? getCloseClass(position) : ''} ${className}`
}

export const getToastContentClasses = () => {
  return `${styles['toast-content']}`
}
