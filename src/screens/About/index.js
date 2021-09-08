import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from 'components/dumb/Card/Media';

// COMPONENTS
const About = () => (
  <Container maxWidth="md">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={1}
    >
      <CardMedia />
    </Box>
  </Container>
);

export default About;
