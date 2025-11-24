import {
  cloneElement,
  isValidElement,
  ReactElement,
  useEffect,
  useState,
} from 'react'
import { createRoot } from 'react-dom/client'

import {
  ShowToastProps,
  ShowToastReturn,
  ToastPosition,
  ToastPositionEnum,
  ToastProps,
} from './toast.type'

import { Text } from '../../components'
import { CloseIcon } from '../../icons'



import {
  ToastClose,
  ToastContent,
  ToastIcon,
  ToastRoot,
  ToastTitle,
} from './toast.styles'

const toastInstances: Record<string, () => void> = {}

const Toast = ({
  id,
  icon,
  title,
  className,
  variant = 'default',
  content,
  position = 'bottom-right',
  duration = 3000,
  persistent = false,
  withCloseButton = true,
  onRemove,
}: ToastProps) => {
  const [closing, setClosing] = useState(false)

  const handleClose = () => setClosing(true)

  const handleAnimationEnd = () => {
    if (closing) {
      onRemove(id)
    }
  }

  const renderContent = () => {
    if (typeof content === 'function') {
      return content({ onClose: handleClose })
    }
    if (isValidElement(content)) {
      return cloneElement(content as ReactElement, { onClose: handleClose })
    }
    return content
  }

  useEffect(() => {
    if (!persistent) {
      const timer = setTimeout(() => setClosing(true), duration)
      return () => clearTimeout(timer)
    }
  }, [duration, persistent])

  useEffect(() => {
    toastInstances[id] = () => setClosing(true)
    return () => {
      delete toastInstances[id]
    }
  }, [id])

  return (
    <ToastRoot
      variant={variant}
      style={{ animationName: closing ? (position.startsWith('top') ? 'fadeOutTop' : 'fadeOutBottom') :
        position === 'top-left' ? 'slideInLeft' :
        position === 'top-right' ? 'slideInRight' :
        position === 'top-center' ? 'slideInTopCenter' :
        position === 'bottom-center' ? 'slideInBottomCenter' :
        'slideInRight' }}
      onAnimationEnd={handleAnimationEnd}
      className={className}
    >
      {icon && <ToastIcon variant={variant}>{icon}</ToastIcon>}
      <ToastContent>
        {title && (
          <Text variant="title-base">
            <ToastTitle>{title}</ToastTitle>
          </Text>
        )}
        {content && (
          <div>{renderContent()}</div>
        )}
      </ToastContent>
      {persistent && withCloseButton && (
        <ToastClose onClick={handleClose}>
          <CloseIcon />
        </ToastClose>
      )}
    </ToastRoot>
  )
}

const positionStyles: ToastPosition = {
  'top-left': { top: '1rem', left: '1rem' },
  'top-center': { top: '1rem', left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: '1rem', right: '1rem' },
  'bottom-left': { bottom: '1rem', left: '1rem' },
  'bottom-center': {
    bottom: '1rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  'bottom-right': { bottom: '1rem', right: '1rem' },
}

const getOrCreateContainer = (position: keyof typeof ToastPositionEnum) => {
  const id = `toast-container-${position}`
  let container = document.getElementById(id)
  if (!container) {
    container = document.createElement('div')
    container.id = id
    container.style.position = 'fixed'
    container.style.zIndex = '99999'
    Object.assign(container.style, positionStyles[position] || {})
    document.body.appendChild(container)
  }
  return container
}

let toastId = 0

export function showToast({
  position = 'bottom-right',
  ...rest
}: ShowToastProps): ShowToastReturn {
  const id = `toast-${toastId++}`
  const container = getOrCreateContainer(position)
  const toastElement = document.createElement('div')
  container.appendChild(toastElement)

  const root = createRoot(toastElement)

  const remove = () => {
    root.unmount()
    container.removeChild(toastElement)
    delete toastInstances[id]
  }

  root.render(<Toast id={id} onRemove={remove} position={position} {...rest} />)

  return { id }
}

export function removeToastById(id: string) {
  if (toastInstances[id]) {
    toastInstances[id]()
  }
}
