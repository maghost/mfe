import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate } = {}) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history;

      if (pathname !== nextPathname) {
        history.push(pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
