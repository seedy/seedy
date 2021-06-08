import AppBarStatic from 'components/dumb/AppBar/Static';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonHome from 'components/smart/Button/Home';
import BoxFlexFill from 'components/dumb/Box/FlexFill';
import TabsRoutes from 'components/smart/Tabs/Routes';

const Home = () => (
  <div>
    <AppBarStatic>
      <Toolbar>
        <ButtonHome />
        <BoxFlexFill />
        <TabsRoutes />
      </Toolbar>
    </AppBarStatic>
  </div>
);

export default Home;
