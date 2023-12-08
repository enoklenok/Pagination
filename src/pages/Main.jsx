import styled from "styled-components";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.main100};
`;

export const Main = () => {
  return <Wrapper>Main</Wrapper>;
};
