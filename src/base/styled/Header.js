import styled from 'styled-components';

const Header = styled.header`
  background-color: ${ ({ theme }) => theme.colors.bgLight };
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Header;
