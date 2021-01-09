import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// MATERIAL UI
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// COMPONENTS
import Header from './components/Header';
import Progress from './components/Progress';

// MFE COMPONENTS
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path='/auth' component={AuthLazy} />
          <Route path='/' component={MarketingLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
