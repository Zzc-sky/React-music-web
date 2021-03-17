import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router/index'

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';


export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </div>
  )
})
