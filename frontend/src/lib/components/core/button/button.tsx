
import Link from 'next/link';
import { Spinner } from '../spinner';
import { StyledButton } from './button.styles';
import { ButtonModelEnum, ButtonProps, ButtonSizeEnum, ButtonVariantEnum } from './button.type';


export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    className,
    size = ButtonSizeEnum.medium,
    type = 'button',
    variant = ButtonVariantEnum.primary,
    model = ButtonModelEnum.default,
    isActive = false,
    href,
    target,
    isLoading,
    style,
    ...rest
  } = props;

  if (href) {
    return (
      <Link href={href} target={target} legacyBehavior passHref>
        <StyledButton
          as="a"
          variant={variant}
          size={size}
          model={model}
          isActive={isActive}
          className={className}
          style={style}
          {...rest}
        >
          {children}
        </StyledButton>
      </Link>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      type={type}
      variant={variant}
      size={size}
      model={model}
      isActive={isActive}
      className={className}
      style={style}
      {...rest}
    >
      {children} {isLoading && <Spinner />}
    </StyledButton>
  );
};
