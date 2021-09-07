import { useCallback, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CardSkills, { ContainerContext } from 'components/dumb/Card/Skills';
import ChipTree from 'components/dumb/Chip/Tree';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

import MoodIcon from '@material-ui/icons/Mood';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

// CONSTANTS
const TEAMPLAYER = 'Equipier';
const MENTOR = 'Mentor';
const INDIVIDUAL = 'Individu';

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
const CardSkillsSoft = (props) => {
  const classes = useStyles();

  const [activeSkill, setActiveSkill] = useState();

  const onTeamplayer = useCallback(
    () => {
      setActiveSkill(TEAMPLAYER);
    },
    [setActiveSkill],
  );

  const onMentor = useCallback(
    () => {
      setActiveSkill(MENTOR);
    },
    [setActiveSkill],
  );

  const onIndividual = useCallback(
    () => {
      setActiveSkill(INDIVIDUAL);
    },
    [setActiveSkill],
  );

  return (
    <CardSkills
      avatar={(
        <AvatarGroup spacing="small">
          <Avatar className={classes.avatarSecondary}>
            <SupervisedUserCircleIcon />
          </Avatar>
          <Avatar className={classes.avatarSecondary}>
            <MoodIcon />
          </Avatar>
          <Avatar className={classes.avatarSecondary}>
            <AccessibilityIcon />
          </Avatar>
        </AvatarGroup>
      )}
      title="Soft Skills"
      subheader="Humain"
      {...props}
    >
      <ContainerContext.Consumer>
        {({ container }) => (
          <Box className={classes.boxResponsive}>
            <ChipTree
              container={container}
              label={TEAMPLAYER}
              active={activeSkill === TEAMPLAYER}
              onClick={onTeamplayer}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Communication" />
                <Chip className={classes.chipSpaced} label="Proaction" />
                <Chip className={classes.chipSpaced} label="Ecoute" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={MENTOR}
              active={activeSkill === MENTOR}
              onClick={onMentor}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Bonnes pratiques" />
                <Chip className={classes.chipSpaced} label="Documentation" />
                <Chip className={classes.chipSpaced} label="Pair programming" />
                <Chip className={classes.chipSpaced} label="Patience" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={INDIVIDUAL}
              active={activeSkill === INDIVIDUAL}
              onClick={onIndividual}
            >
              <Box>
                <Chip className={classes.chipSpaced} label="Rigueur" />
                <Chip className={classes.chipSpaced} label="Organisation" />
                <Chip className={classes.chipSpaced} label="Enthousiasme" />
                <Chip className={classes.chipSpaced} label="Sensibilité esthétique" />
              </Box>
            </ChipTree>
          </Box>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsSoft;
