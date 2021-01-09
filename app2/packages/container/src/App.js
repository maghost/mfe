import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// MATERIAL UI
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// COMPONENTS
import Header from './components/Header';
import Progress from './components/Progress';

// MFE COMPONENTS
const AuthLazy = lazy(() => import('./containers/AuthApp'));
const DashboardLazy = lazy(() => import('./containers/DashboardApp'));
const MarketingLazy = lazy(() => import('./containers/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (!isSignedIn) return;

    history.push('/dashboard');
  }, [isSignedIn]);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <CssBaseline />
      <Router history={history}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path='/auth'>
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path='/dashboard'>
              {!isSignedIn && <Redirect to='/' />}
              <DashboardLazy />
            </Route>
            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </Router>
    </StylesProvider>
  );
};

export default App;
