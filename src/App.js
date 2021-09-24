import routes from 'routes';

import Layout from 'screens/Layout';
import Home from 'screens/Home';
import About from 'screens/About';
import { Route, Switch } from 'react-router-dom';
import ThemeProvider from 'components/dumb/IconButton/DarkMode/Context/ThemeProvider';
import IconButtonDarkModeContext from 'components/dumb/IconButton/DarkMode/Context';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <IconButtonDarkModeContext>
        <ThemeProvider>
          <CssBaseline />
          <Layout>
            <Switch>
              <Route path={routes.about} exact>
                <About />
              </Route>
              <Route path={routes._} exact>
                <Home />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </IconButtonDarkModeContext>
    </>
  );
}

export default App;
