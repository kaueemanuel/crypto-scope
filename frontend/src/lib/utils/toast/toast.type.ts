export enum ToastPositionEnum {
  'top-left' = 'top-left',
  'top-center' = 'top-center',
  'top-right' = 'top-right',
  'bottom-left' = 'bottom-left',
  'bottom-center' = 'bottom-center',
  'bottom-right' = 'bottom-right',
}

export enum ToastVariantEnum {
  'default' = 'default',
  'info' = 'info',
  'success' = 'success',
  'warning' = 'warning',
  'error' = 'error',
}

export interface ToastProps {
  id: string
  variant?: keyof typeof ToastVariantEnum
  icon?: React.ReactNode
  title?: React.ReactNode
  content?:
    | React.ReactNode
    | ((props: { onClose: () => void }) => React.ReactNode)
  position?: keyof typeof ToastPositionEnum
  duration?: number
  persistent?: boolean
  className?: string
  withCloseButton?: boolean
  onRemove: (id: string) => void
}

export interface ShowToastProps extends Omit<ToastProps, 'onRemove' | 'id'> {}

export type ToastPosition = Record<
  ToastPositionEnum,
  {
    top?: string
    left?: string
    right?: string
    bottom?: string
    transform?: string
  }
>

export interface ShowToastReturn {
  id: string
}
