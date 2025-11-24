export enum TextVariantEnum {
  /** 12px-regular-smalltxt */
  'text-xsmall' = 'text-xsmall',
  /** 12px-semibold-smalltitle */
  'title-xsmall' = 'title-xsmall',
  /** 14px-regular-bodytxt */
  'text-small' = 'text-small',
  /** 14px-semibold-smalltitle */
  'title-small' = 'title-small',
  /** 16px-regular-bodytxt */
  'text-base' = 'text-base',
  /** 16px-semibold-smalltitle */
  'title-base' = 'title-base',
  /** 18px-regular-bodytxt */
  'text-medium' = 'text-medium',
  /** 18px-semibold-smalltitle */
  'title-medium' = 'title-medium',
  /** 20px-regular-bodytxt */
  'text-large' = 'text-large',
  /** 20px-semibold-bodytxt */
  'text-large-bold' = 'text-large-bold',
  /** 24px-semibold-title */
  'title-large' = 'title-large',
  /** 40px-semibold-title */
  'title-xlarge' = 'title-xlarge',
  /** 48px-semibold-title */
  'title-xxlarge' = 'title-xxlarge',
  /** regular-link */
  'link' = 'link',
  /** regular-link */
  'button' = 'button',
}

export interface TextProps {
  variant?: keyof typeof TextVariantEnum
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  target?: string
  onClick?: () => void
}
