import { Button } from "@/lib";
import styled from "@emotion/styled";

export const StyledNavbar = styled.nav`
  padding: var(--space-4);
  display: flex;
  gap: var(--space-2);
  align-items: center;

  .lang-box {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

export const ButtonLink = styled(Button) <{ active?: boolean }>`
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
`