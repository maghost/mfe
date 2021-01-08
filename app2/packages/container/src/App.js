import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
