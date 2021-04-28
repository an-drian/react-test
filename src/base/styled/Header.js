import styled from "styled-components";

const Header = styled.div`
  background-color: ${ ({ theme }) => theme.colors.bgLight };
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  height: 60px;
  padding: 0 30px;
`;

export default Header;
