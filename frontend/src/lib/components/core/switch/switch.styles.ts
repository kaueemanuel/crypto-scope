import styled from '@emotion/styled';

export const SwitchContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchSlider = styled.span<{ checked?: boolean; disabled?: boolean }>`
  position: relative;
  width: var(--space-8);
  height: var(--space-5);
  background-color: var(--container);
  border: var(--border-size-small) solid var(--gray-200);
  border-radius: var(--radii-medium);
  transition: background-color 0.4s, border-color 0.4s;
  display: flex;
  align-items: center;

  ${({ checked }) =>
    checked &&
    `
    background-color: var(--primary-600);
    border-color: var(--primary-600);
  `}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `}
`;

export const SwitchBefore = styled.span<{ checked?: boolean }>`
  content: "";
  width: var(--space-4);
  height: var(--space-4);
  background-color: var(--gray-000);
  border-radius: 50%;
  transition: transform 0.4s;
  margin-left: var(--space-1);

  ${({ checked }) =>
    checked &&
    `
    transform: translateX(calc(var(--space-5) - var(--space-1)));
  `}
`;

export const ErrorText = styled.div`
  margin: var(--space-2) 0;
  color: var(--danger-600);
`;