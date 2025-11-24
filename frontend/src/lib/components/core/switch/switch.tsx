import { Text } from '../text'
import { ErrorText, SwitchBefore, SwitchContainer, SwitchInput, SwitchSlider } from './switch.styles'
import { SwitchProps } from './switch.types'

export const Switch = ({
  className,
  checked,
  onChange,
  error,
  disabled,
  id,
  ref,
}: SwitchProps) => {
  return (
    <div className={className}>
      <SwitchContainer>
        <SwitchInput
          ref={ref}
          id={id}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <SwitchSlider checked={checked} disabled={disabled}>
          <SwitchBefore checked={checked} />
        </SwitchSlider>
      </SwitchContainer>
      {error && <ErrorText><Text>{error}</Text></ErrorText>}
    </div>
  )
}
