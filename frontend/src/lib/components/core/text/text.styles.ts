import styled from '@emotion/styled';

export const TextCore = styled.span`
  display: inline-block;
  line-height: var(--line-height-small);
`;

export const TextXSmall = styled(TextCore)`
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-normal);
`;

export const TitleXSmall = styled(TextCore)`
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-medium);
`;

export const TextSmall = styled(TextCore)`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-normal);
`;

export const TitleSmall = styled(TextCore)`
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-medium);
`;

export const TextBase = styled(TextCore)`
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-normal);
  color: var(--gray-600);
`;

export const TitleBase = styled(TextCore)`
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-medium);
`;

export const TextMedium = styled(TextCore)`
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-normal);
`;

export const TitleMedium = styled(TextCore)`
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-medium);
`;

export const TextLarge = styled(TextCore)`
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-normal);
`;

export const TextLargeBold = styled(TextCore)`
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-medium);
`;

export const TitleLarge = styled(TextCore)`
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-medium);
`;

export const TitleXLarge = styled(TextCore)`
  font-size: var(--font-size-7);
  font-weight: var(--font-weight-medium);
`;

export const TitleXXLarge = styled(TextCore)`
  font-size: var(--font-size-8);
  font-weight: var(--font-weight-medium);
`;

export const Link = styled.a`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: underline;
  margin-left: var(--space-1);
  margin-right: var(--space-1);
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-700);
`;

export const Button = styled.button`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  color: inherit;
  text-decoration: inherit;
  margin: 0 var(--space-1);
  cursor: pointer;
  background-color: transparent;
`;