import styled from '@emotion/styled';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-medium);
  color: #0a1133;
  margin-bottom: var(--space-2);
  gap: var(--space-2);
`;

export const Required = styled.span`
  color: var(--danger-800);
  margin-left: var(--space-2);
`;