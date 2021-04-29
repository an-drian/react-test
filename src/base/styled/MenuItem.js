import styled from 'styled-components';

const MenuItem = styled.li`
  height: 52px;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  background-color: ${ props => props.active ? props.theme.colors.accentRed : 'transparent'};
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-weight: 600;
  font-size: 12px; 
  transition: 0.2s all;
  &:hover {
    background-color: ${props => props.theme.colors.accentRed}
  }
`;

export default MenuItem;
