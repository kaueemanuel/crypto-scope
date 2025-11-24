import styled from '@emotion/styled';

export const StyledInput = styled.div<{ size?: string; error?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radii-medium);
  border: var(--border-size-medium) solid var(--gray-200);
  background-color: var(--gray-000);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-medium);
  color: var(--gray-700);
  overflow: hidden;
  cursor: pointer;

  input,
  textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border-radius: var(--radii-medium);
    font-family: var(--font-family);
    color: var(--gray-800);
    border: none;
  }

  input::placeholder,
  textarea::placeholder {
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
        textarea {
          height: 3.5rem;
          padding: var(--space-1) var(--space-2);
          font-size: var(--font-size-2);
        }
      `;
    } else if (size === 'large') {
      return `
        input {
          height: 3.75rem;
          padding: 0 var(--space-5);
          font-size: var(--font-size-6);
        }
        textarea {
          height: 12rem;
          padding: var(--space-4) var(--space-5);
          font-size: var(--font-size-6);
        }
      `;
    } else {
      return `
        input {
          height: 2.5rem;
          padding: 0 var(--space-4);
          font-size: var(--font-size-3);
        }
        textarea {
          height: 5rem;
          padding: var(--space-3) var(--space-4);
          font-size: var(--font-size-3);
        }
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

export const LeftIcon = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
  margin-left: ${({ size }) =>
    size === 'small' ? 'var(--space-2)' :
      size === 'large' ? 'var(--space-5)' :
        'var(--space-4)'};
`;

export const RightIcon = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: transparent;
  margin-right: ${({ size }) =>
    size === 'small' ? 'var(--space-2)' :
      size === 'large' ? 'var(--space-5)' :
        'var(--space-4)'};
`;

export const ErrorText = styled.div`
  margin: var(--space-2) 0;
  color: var(--danger-600);
`;
