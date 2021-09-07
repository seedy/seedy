import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  '@keyframes typing': {
    from: {
      width: 0,
    },
    to: {
      width: '100%',
    },
  },
  '@keyframes blinkCaret': {
    from: {
      borderColor: 'transparent',
    },
    to: {
      borderColor: 'transparent',
    },
    '50%': {
      borderColor: theme.palette.secondary.main,
    },
  },
  typewriter: {
    overflow: 'hidden',
    borderRight: `0.10em solid ${theme.palette.secondary.main}`,
    whiteSpace: 'nowrap',
    margin: theme.spacing(0, 'auto'),
    // blink for the duration of typing, plus one more cycle
    animation: `
      $typing 2.5s steps(25, end),
      $blinkCaret 0.5s step-end 6 forwards;
    `,
  },
}));


const HeroTypewriter = (props) => {
  const classes = useStyles();
  return (
    <Typography className={classes.typewriter} {...props} />
  );
};

HeroTypewriter.propTypes = {
  children: PropTypes.node,
};

HeroTypewriter.defaultProps = {
  children: null,
};

export default HeroTypewriter;
