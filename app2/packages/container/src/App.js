import React, { useEffect } from 'react';

import { mount as mountMarketing } from 'marketing/MarketingApp';

const App = () => {
  useEffect(() => mountMarketing(document.getElementById('my-marketing')), []);

  return (
    <>
      <h1>Container</h1>
      <div id='my-marketing' />
    </>
  );
};

export default App;
