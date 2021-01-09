import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log('App', isSignedIn);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <CssBaseline />
      <BrowserRouter>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path='/auth'>
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path='/' component={MarketingLazy} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
