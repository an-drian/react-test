import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const routes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    main: Home
  },
  {
    name: 'page1',
    path: '/page1',
    exact: true,
    main: Page1
  },
  {
    name: 'page2',
    path: '/page2',
    exact: true,
    main: Page2
  },
];

export default routes;
