import React from 'react';
// import { Provider } from '@/redux';
import { 
  // BrowserRouter
  HashRouter
  as Router, 
} from 'react-router-dom';
import 
{ renderRoutes } from './loadRoute';

import routes from './routes';

export default function RouterContent() {
  return (
    // <Provider>
      <Router className="router_content">
        {
          renderRoutes(routes)
        }
      </Router>
    // </Provider>
  );
}

