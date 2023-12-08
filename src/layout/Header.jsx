import styled from "styled-components";

const Wrapper = styled.header`
  height: 70px;
  line-height: 70px;
  width: 100vw;
  background: ${({ theme }) => theme.colors.main50};
  color: ${({ theme }) => theme.colors.main950};
  text-align: center;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.xl5};
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>Header</Title>
    </Wrapper>
  );
};
