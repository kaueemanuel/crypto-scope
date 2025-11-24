import styled from '@emotion/styled';

export const StyledInputNumber = styled.div<{ size?: string; showIcons?: boolean; error?: boolean; disabled?: boolean; variant?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radii-medium);
  border-width: var(--border-size-medium);
  border-style: solid;
  background-color: var(--gray-000);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-medium);
  color: var(--gray-700);
  overflow: hidden;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
    background-color: var(--gray-200);
    color: var(--gray-600);
    cursor: not-allowed;
  `}

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: var(--radii-medium);
    color: var(--gray-800);
    border: none;
  }

  input::placeholder {
    color: var(--gray-400);
  }

  input:disabled {
    background-color: var(--gray-200);
    color: var(--gray-600);
    cursor: not-allowed;
  }

  &:focus,
  &:hover {
    outline: var(--border-size-medium) solid #e6eafc;
    border-color: var(--primary-600);
  }

  /* Size */
  ${({ size }) => {
    if (size === 'small') {
      return `
        input {
          height: 2rem;
          padding: 0 var(--space-2);
          font-size: var(--font-size-2);
        }
        .left-icon, .right-icon {
          margin-left: var(--space-2);
          margin-right: var(--space-2);
        }
        svg {
          height: 1rem;
          width: 1rem;
        }
      `;
    } else if (size === 'large') {
      return `
        input {
          height: 3.75rem;
          padding: 0 var(--space-5);
          font-size: var(--font-size-6);
        }
        .left-icon, .right-icon {
          margin-left: var(--space-5);
          margin-right: var(--space-5);
        }
        svg {
          height: 1.875rem;
          width: 1.875rem;
        }
      `;
    } else {
      return `
        input {
          height: 2.5rem;
          padding: 0 var(--space-4);
          font-size: var(--font-size-3);
        }
        .left-icon, .right-icon {
          margin-left: var(--space-4);
          margin-right: var(--space-4);
        }
        svg {
          height: 1.25rem;
          width: 1.25rem;
        }
      `;
    }
  }}

  /* Variant */
  ${({ variant }) => {
    if (variant === 'danger') {
      return `
        border-color: var(--danger-600);
        &:hover {
          border-color: var(--danger-700);
        }
      `;
    } else if (variant === 'info') {
      return `
        border-color: var(--info-600);
        &:hover {
          border-color: var(--info-700);
        }
      `;
    } else {
      return `
        border-color: var(--gray-200);
      `;
    }
  }}

  /* Error */
  ${({ error }) =>
    error &&
    `
    border-color: var(--danger-600);
  `}
`;

export const LeftIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
`;

export const RightIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
`;

export const ErrorText = styled.div`
  margin: var(--space-2) 0;
  color: var(--danger-600);
`;
