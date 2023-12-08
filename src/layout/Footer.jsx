import styled from "styled-components";

const Wrapper = styled.footer`
  min-height: 200px;
  width: 100%;
  background: ${({ theme }) => theme.colors.main900};
`;
export const Footer = () => {
  return <Wrapper>Footer</Wrapper>;
};
