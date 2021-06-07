import AppBarStatic from 'components/dumb/AppBar/Static';
import Logo from 'components/dumb/Logo';
import Toolbar from '@material-ui/core/Toolbar';

const Home = () => (
  <div>
    <AppBarStatic>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBarStatic>
  </div>
);

export default Home;
