import { Card } from "@/lib";
import styled from "@emotion/styled";

export const PriceChange = styled.p<{ positive: boolean }>`
  color: ${({ positive }) => (positive ? 'var(--success-600, green)' : 'var(--danger-600, red)')};
`;


export const CardLink = styled(Card)`
  > div {
    display: flex;
    flex-direction: column;
  }

  .title {

  }

`