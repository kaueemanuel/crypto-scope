import styled from '@emotion/styled';

export const ToastRoot = styled.div<{ variant: string }>`
  padding: var(--space-4);
  border-radius: var(--radii-medium);
  margin-bottom: 0.5rem;
  min-width: 12.5rem;
  max-width: 30rem;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: var(--space-2);
  animation-duration: 0.4s;
  animation-fill-mode: both;
  background: ${({ variant }) =>
    variant === 'success' ? 'var(--success-200)' :
    variant === 'error' ? 'var(--danger-200)' :
    variant === 'info' ? 'var(--info-200)' :
    variant === 'warning' ? 'var(--warning-200)' :
    'var(--gray-200)'};
  color: ${({ variant }) =>
    variant === 'success' ? 'var(--success-900)' :
    variant === 'error' ? 'var(--danger-900)' :
    variant === 'info' ? 'var(--info-900)' :
    variant === 'warning' ? 'var(--warning-900)' :
    'var(--gray-900)'};

  @media (max-width: 480px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const ToastIcon = styled.div<{ variant: string }>`
  & > svg {
    fill: ${({ variant }) =>
      variant === 'success' ? 'var(--success-600)' :
      variant === 'error' ? 'var(--danger-600)' :
      variant === 'info' ? 'var(--info-600)' :
      variant === 'warning' ? 'var(--warning-600)' :
      'var(--gray-600)'};
  }
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  flex: 1;
`;

export const ToastTitle = styled.div`
  padding-top: 0.1875rem;
`;

export const ToastClose = styled.div`
  cursor: pointer;
`;
