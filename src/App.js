import routes from 'routes';

import Home from 'screens/Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path={routes._}>
      <Home />
    </Route>
  );
}

export default App;
