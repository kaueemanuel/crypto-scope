

import { StyledCard } from './card.styles'
import type { CardProps } from './card.type'

export const Card = ({
  children,
  className,
  variant = 'base',
  onClick,
}: CardProps) => {
  return (
    <StyledCard variant={variant} className={className} onClick={onClick}>
      {children}
    </StyledCard>
  )
}

