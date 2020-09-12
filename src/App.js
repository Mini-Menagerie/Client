/** @jsx jsx */
import { jsx, Global } from '@emotion/core';

import Router from './routes/Router';
import LayoutTheme from './layouts/LayoutTheme/LayoutTheme';
import globalStyles from './styles/global';

const App = () => {
  return (
      <LayoutTheme>
        <Global styles={globalStyles} />
        <Router />
      </LayoutTheme>
  );
}

export default App;
