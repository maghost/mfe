import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// COMPONENTS
import Header from './components/Header';

// MFE COMPONENTS
import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/auth' component={AuthApp} />
          <Route path='/' component={MarketingApp} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
