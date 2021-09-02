import { useCallback, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CardSkills, { ContainerContext } from 'components/dumb/Card/Skills';
import ChipTree from 'components/dumb/Chip/Tree';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import CodeIcon from '@material-ui/icons/Code';
import DesktopIcon from '@material-ui/icons/DesktopMac';
import GestureIcon from '@material-ui/icons/Gesture';

// CONSTANTS
const JAVASCRIPT = 'JS';
const REACT = 'React';
const UX = 'UX';
const DESIGN = 'Design';

// HOOKS
const useStyles = makeStyles((theme) => ({
  chipSpaced: {
    margin: theme.spacing(0.5, 0.5),
  },
  avatarSecondary: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
  },
  boxResponsive: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
}));

// COMPONENTS
const CardSkillsTech = (props) => {
  const classes = useStyles();

  const [activeSkill, setActiveSkill] = useState();

  const onJavascript = useCallback(
    () => {
      setActiveSkill(JAVASCRIPT);
    },
    [setActiveSkill],
  );

  const onReact = useCallback(
    () => {
      setActiveSkill(REACT);
    },
    [setActiveSkill],
  );

  const onDesign = useCallback(
    () => {
      setActiveSkill(DESIGN);
    },
    [setActiveSkill],
  );

  const onUX = useCallback(
    () => {
      setActiveSkill(UX);
    },
    [setActiveSkill],
  );

  return (
    <CardSkills
      avatar={(
        <AvatarGroup spacing="small">
          <Avatar className={classes.avatarSecondary}>
            <CodeIcon />
          </Avatar>
          <Avatar className={classes.avatarSecondary}>
            <DesktopIcon />
          </Avatar>
          <Avatar className={classes.avatarSecondary}>
            <GestureIcon />
          </Avatar>
        </AvatarGroup>
      )}
      title="Tech Skills"
      subheader="Frontend"
      {...props}
    >
      <ContainerContext.Consumer>
        {({ container }) => (
          <Box className={classes.boxResponsive}>
            <ChipTree
              container={container}
              label={JAVASCRIPT}
              active={activeSkill === JAVASCRIPT}
              onClick={onJavascript}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="ES6" />
                <Chip className={classes.chipSpaced} label="ES2020" />
                <Chip className={classes.chipSpaced} label="FP" />
                <Chip className={classes.chipSpaced} label="Currying" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={REACT}
              active={activeSkill === REACT}
              onClick={onReact}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Hooks" />
                <Chip className={classes.chipSpaced} label="Context API" />
                <Chip className={classes.chipSpaced} label="State management" />
                <Chip className={classes.chipSpaced} label="Data fetching" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={UX}
              active={activeSkill === UX}
              onClick={onUX}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Responsive" />
                <Chip className={classes.chipSpaced} label="Empty state" />
                <Chip className={classes.chipSpaced} label="Accessibility" />
                <Chip className={classes.chipSpaced} label="Animations" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={DESIGN}
              active={activeSkill === DESIGN}
              onClick={onDesign}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Mockups" />
                <Chip className={classes.chipSpaced} label="User scenarii" />
                <Chip className={classes.chipSpaced} label="Component library" />
                <Chip className={classes.chipSpaced} label="Design systems" />
              </Box>
            </ChipTree>
          </Box>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsTech;
