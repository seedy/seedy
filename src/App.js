import theme from 'theme';
import routes from 'routes';

import Home from 'screens/Home';
import { Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Route path={routes._}>
        <Home />
      </Route>
    </ThemeProvider>
  );
}

export default App;
