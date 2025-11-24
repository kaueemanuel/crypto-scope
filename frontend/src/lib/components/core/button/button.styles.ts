import styled from '@emotion/styled';

export const StyledButton = styled.button<{
  variant: string;
  size: string;
  model: string;
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-size-small) solid transparent;
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-small);
  cursor: pointer;
  border-radius: ${({ model }) =>
    model === 'pill' ? '100rem' : model === 'round' ? '100%' : 'var(--radii-medium)'};
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
  /* Size */
  height: ${({ size }) =>
    size === 'xsmall' ? '1.25rem' :
      size === 'small' ? '2rem' :
        size === 'medium' ? '2.5rem' :
          size === 'large' ? '3.75rem' : '2.5rem'};
  padding: ${({ size, model }) => {
    if (model === 'square' || model === 'round') {
      return size === 'xsmall' ? '0' : size === 'small' ? '0' : size === 'medium' ? '0' : size === 'large' ? '0' : '0';
    }
    return size === 'xsmall' ? '0 var(--space-2)' :
      size === 'small' ? '0 var(--space-2)' :
        size === 'medium' ? '0 var(--space-4)' :
          size === 'large' ? '0 var(--space-5)' : '0 var(--space-4)';
  }};
  font-size: ${({ size }) =>
    size === 'xsmall' ? 'var(--font-size-1)' :
      size === 'small' ? 'var(--font-size-2)' :
        size === 'medium' ? 'var(--font-size-3)' :
          size === 'large' ? 'var(--font-size-2)' : 'var(--font-size-3)'};
  gap: ${({ size }) =>
    size === 'xsmall' ? 'var(--space-1)' :
      size === 'small' ? 'var(--space-2)' :
        size === 'medium' ? 'var(--space-4)' :
          size === 'large' ? 'var(--space-5)' : 'var(--space-4)'};
  /* Variant */
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--primary-600)' :
      variant === 'secondary' ? 'var(--gray-100)' :
        variant === 'ghost' ? 'transparent' :
          variant === 'danger' ? 'var(--danger-600)' :
            variant === 'info' ? 'var(--info-800)' :
              variant === 'light' ? 'var(--primary-100)' :
                variant === 'danger-light' ? 'var(--danger-200)' :
                  variant === 'success-light' ? 'var(--success-200)' :
                    variant === 'info-light' ? 'var(--info-200)' :
                      variant === 'primary-outline' ? 'var(--gray-100)' :
                        variant === 'danger-outline' ? 'transparent' :
                          'var(--gray-200)'};
  color: ${({ variant }) =>
    variant === 'primary' ? '#fafafc' :
      variant === 'secondary' ? 'var(--primary-1000)' :
        variant === 'ghost' ? 'var(--primary-1000)' :
          variant === 'danger' ? '#fafafc' :
            variant === 'info' ? 'var(--info-100)' :
              variant === 'light' ? 'var(--primary-600)' :
                variant === 'danger-light' ? 'var(--danger-700)' :
                  variant === 'success-light' ? 'var(--success-700)' :
                    variant === 'info-light' ? 'var(--info-700)' :
                      variant === 'primary-outline' ? 'var(--primary-600)' :
                        variant === 'danger-outline' ? 'var(--danger-600)' :
                          'var(--gray-900)'};
  border-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--primary-600)' :
      variant === 'secondary' ? 'var(--gray-200)' :
        variant === 'ghost' ? 'transparent' :
          variant === 'danger' ? 'var(--danger-600)' :
            variant === 'info' ? 'var(--info-800)' :
              variant === 'light' ? 'var(--primary-100)' :
                variant === 'danger-light' ? 'var(--danger-200)' :
                  variant === 'success-light' ? 'var(--success-200)' :
                    variant === 'info-light' ? 'var(--info-200)' :
                      variant === 'primary-outline' ? 'var(--gray-200)' :
                        variant === 'danger-outline' ? 'var(--danger-600)' :
                          'var(--gray-200)'};
  &:hover {
    background-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--semantic-actions-primary-hover)' :
      variant === 'secondary' ? 'rgba(125, 134, 178, 0.1)' :
        variant === 'ghost' ? 'rgba(125, 134, 178, 0.1)' :
          variant === 'danger' ? 'var(--danger-800)' :
            variant === 'info' ? 'var(--info-1000)' :
              variant === 'light' ? 'var(--primary-200)' :
                variant === 'danger-light' ? 'var(--danger-300)' :
                  variant === 'success-light' ? 'var(--success-300)' :
                    variant === 'info-light' ? 'var(--info-300)' :
                      variant === 'primary-outline' ? 'var(--primary-600)' :
                        variant === 'danger-outline' ? 'var(--danger-600)' :
                          'var(--gray-200)'};
    color: ${({ variant }) =>
    variant === 'primary-outline' ? 'var(--gray-100)' :
      variant === 'danger-outline' ? '#fafafc' :
        undefined};
    border-color: ${({ variant }) =>
    variant === 'primary' ? 'var(--semantic-actions-primary-hover)' :
      variant === 'secondary' ? 'var(--gray-200)' :
        variant === 'ghost' ? 'transparent' :
          variant === 'danger' ? 'var(--danger-800)' :
            variant === 'info' ? 'var(--info-1000)' :
              variant === 'light' ? 'var(--primary-200)' :
                variant === 'danger-light' ? 'var(--danger-300)' :
                  variant === 'success-light' ? 'var(--success-300)' :
                    variant === 'info-light' ? 'var(--info-300)' :
                      variant === 'primary-outline' ? 'var(--primary-600)' :
                        variant === 'danger-outline' ? 'var(--danger-600)' :
                          'var(--gray-200)'};
  }
`;
