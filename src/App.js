import routes from 'routes';

import Home from 'screens/Home';
import Pro from 'screens/Pro';
import { Route, Switch } from 'react-router-dom';
import ThemeProvider from 'components/dumb/IconButton/DarkMode/Context/ThemeProvider';
import IconButtonDarkModeContext from 'components/dumb/IconButton/DarkMode/Context';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <IconButtonDarkModeContext>
        <ThemeProvider>
          <Route path={routes._}>
            <Home>
              <Switch>
                <Route path={routes.pro} exact>
                  <Pro />
                </Route>
              </Switch>
            </Home>
          </Route>
        </ThemeProvider>
      </IconButtonDarkModeContext>
    </>
  );
}

export default App;
