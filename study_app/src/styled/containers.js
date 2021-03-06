import styled from "styled-components";

export const DivWrap = styled.div`
  text-align: center;

  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 601px) {
    width: 48%;
  }
  @media (min-width: 993px) {
    width: 31%;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
