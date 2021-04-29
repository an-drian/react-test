import { Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';
import SideNav from '../base/components/SideNav';

import routes from './routes';

export default function RouterConfig() {
  return (
    <>
      <SideNav routes={routes} />
      <Switch>
        {/* List all routes here */}
        {routes.map((route, index) => (
            <Route
              key={`${index}-${route.name}`}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          )
        )}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
