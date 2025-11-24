import { SVGProps } from 'react'

import { SpinnerIcon } from '../../../icons'

import { SpinnerContainer } from './spinner.styles'

export const Spinner = (props: SVGProps<SVGSVGElement>) => {
  return (
    <SpinnerContainer>
      <SpinnerIcon {...props} />
    </SpinnerContainer>
  )
}
