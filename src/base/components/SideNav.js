import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sidebar, MenuItem, List } from '../../base/styled';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { arrayOf, shape, bool, string, elementType } from 'prop-types';

const StyledLink = styled(Link)`
  color: ${props => props.$active ? props.theme.colors.bgLight : props.theme.colors.black};
  text-decoration: none;
`;

export default function SideNav({ routes }) {
  const { t } = useTranslation('sidenav');
  const { pathname } = useLocation();
  const isActivePath = (currentPath, routerPath) => currentPath === routerPath;
  return (
    <Sidebar>
      <List>
        {routes.map((route, index) => (
          <MenuItem
            key={`${index}-${route.name}`}
            $active={isActivePath(pathname, route.path)}
          >
            <StyledLink
              to={route.path}
              $active={isActivePath(pathname, route.path)}
            >{t(route.name)}</StyledLink>
          </MenuItem>
        ))}
      </List>
    </Sidebar>
  );
}

SideNav.propTypes = {
  routes: arrayOf(shape({
    name: string,
    path: string,
    exact: bool,
    main: elementType
  }))
};
