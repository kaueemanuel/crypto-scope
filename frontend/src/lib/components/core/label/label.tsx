import { Required, StyledLabel } from './label.styles'
import { LabelProps } from './label.type'

const Label = ({ children, className, required, ...props }: LabelProps) => {
  return (
    <StyledLabel className={className} {...props}>
      {children}
      {required && <Required>*</Required>}
    </StyledLabel>
  )
}

export default Label
