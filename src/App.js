import routes from 'routes';

import Home from 'screens/Home';
import { Route } from 'react-router-dom';
import ThemeProvider from 'components/dumb/IconButton/DarkMode/Context/ThemeProvider';
import IconButtonDarkModeContext from 'components/dumb/IconButton/DarkMode/Context';

function App() {
  return (
    <IconButtonDarkModeContext>
      <ThemeProvider>
        <Route path={routes._}>
          <Home />
        </Route>
      </ThemeProvider>
    </IconButtonDarkModeContext>
  );
}

export default App;
