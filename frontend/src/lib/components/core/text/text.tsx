import { createElement } from 'react'

import { TextComponents } from './text.constants'

import {
  Button as StyledButton,
  Link as StyledLink,
  TextBase,
  TextLarge,
  TextLargeBold,
  TextMedium,
  TextSmall,
  TextXSmall,
  TitleBase,
  TitleLarge,
  TitleMedium,
  TitleSmall,
  TitleXLarge,
  TitleXSmall,
  TitleXXLarge,
} from './text.styles'

import type { TextProps } from './text.type'

const componentMap = {
  'text-xsmall': TextXSmall,
  'title-xsmall': TitleXSmall,
  'text-small': TextSmall,
  'title-small': TitleSmall,
  'text-base': TextBase,
  'title-base': TitleBase,
  'text-medium': TextMedium,
  'title-medium': TitleMedium,
  'text-large': TextLarge,
  'text-large-bold': TextLargeBold,
  'title-large': TitleLarge,
  'title-xlarge': TitleXLarge,
  'title-xxlarge': TitleXXLarge,
  'link': StyledLink,
  'button': StyledButton,
}

const Text = ({
  children,
  className,
  variant = 'text-base',
  style,
  ...rest
}: TextProps) => {
  const tagName = TextComponents[variant].htmlTag
  const Component = componentMap[variant]

  if (variant === 'link') {
    return (
      <StyledLink {...rest} href={`${rest.href}`} className={className}>
        {children}
      </StyledLink>
    )
  }

  if (Component) {
    return (
      <Component className={className} style={style} {...rest}>
        {children}
      </Component>
    )
  }

  return createElement(
    tagName,
    {
      className,
      style,
      ...rest,
    },
    children,
  )
}

export default Text
