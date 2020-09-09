import React from 'react';

import Router from './routes/Router';
import LayoutTheme from './layouts/LayoutTheme/LayoutTheme';

const App = () => {
  return (
    <LayoutTheme>
      <Router />
    </LayoutTheme>
  );
}

export default App;
