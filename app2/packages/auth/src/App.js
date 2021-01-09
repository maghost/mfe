import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

// MATERIAL UI
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// COMPONENTS
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassName}>
    <Router history={history}>
      <Switch>
        <Route path='/auth/signin' component={Signin} />
        <Route path='/auth/signup' component={Signup} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
