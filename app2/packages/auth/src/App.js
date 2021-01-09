import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

// MATERIAL UI
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// COMPONENTS
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history, onSignIn }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path='/auth/signin'>
          <SignIn onSignIn={onSignIn} />
        </Route>
        <Route path='/auth/signup'>
          <SignUp onSignIn={onSignIn} />
        </Route>
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
