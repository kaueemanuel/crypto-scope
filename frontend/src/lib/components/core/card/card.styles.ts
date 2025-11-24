import styled from '@emotion/styled';

export const StyledCard = styled.section<{ variant?: string }>`
  display: flex;
  flex-direction: column;
  padding: var(--space-6);
  border-radius: var(--radii-small);
  overflow: hidden;
  border: var(--border-size-small) solid
    ${({ variant }) =>
    variant === 'primary'
      ? 'var(--primary-100)'
      : variant === 'whatsapp'
        ? '#ebf9f1'
        : variant === 'link'
          ? 'rgba(137, 61, 231, 0.1)'
          : 'var(--gray-200)'};
  background-color: ${({ variant }) =>
    variant === 'primary'
      ? 'var(--primary-100)'
      : variant === 'whatsapp'
        ? '#ebf9f1'
        : variant === 'link'
          ? 'rgba(137, 61, 231, 0.1)'
          : 'var(--gray-100)'};
`;
