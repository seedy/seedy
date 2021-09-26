import { useCallback, useState } from 'react';

import CardSkills, { ContainerContext } from 'components/dumb/Card/Skills';
import ChipTree from 'components/dumb/Chip/Tree';
import Box from '@mui/material/Box';
import AvatarGroup from '@mui/material/AvatarGroup';
import AvatarSecondary from 'components/dumb/Avatar/Secondary';
import BoxXsResponsiveRowCenterColumnStretch from 'components/dumb/Box/XsResponsive/RowCenterColumnStretch';
import ChipSpaced from 'components/dumb/Chip/Spaced';

import MoodIcon from '@mui/icons-material/Mood';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

// CONSTANTS
const TEAMPLAYER = 'Equipier';
const MENTOR = 'Mentor';
const INDIVIDUAL = 'Individu';

// COMPONENTS
const CardSkillsSoft = (props) => {
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
          <AvatarSecondary>
            <SupervisedUserCircleIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <MoodIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <AccessibilityIcon />
          </AvatarSecondary>
        </AvatarGroup>
      )}
      title="Soft Skills"
      subheader="Humain"
      {...props}
    >
      <ContainerContext.Consumer>
        {({ container }) => (
          <BoxXsResponsiveRowCenterColumnStretch
            justifyContent="space-between"
          >
            <ChipTree
              container={container}
              label={TEAMPLAYER}
              active={activeSkill === TEAMPLAYER}
              onClick={onTeamplayer}
            >
              <Box>
                <ChipSpaced label="Communication" />
                <ChipSpaced label="Proaction" />
                <ChipSpaced label="Ecoute" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={MENTOR}
              active={activeSkill === MENTOR}
              onClick={onMentor}
            >
              <Box>
                <ChipSpaced label="Bonnes pratiques" />
                <ChipSpaced label="Documentation" />
                <ChipSpaced label="Pair programming" />
                <ChipSpaced label="Patience" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={INDIVIDUAL}
              active={activeSkill === INDIVIDUAL}
              onClick={onIndividual}
            >
              <Box>
                <ChipSpaced label="Rigueur" />
                <ChipSpaced label="Organisation" />
                <ChipSpaced label="Enthousiasme" />
                <ChipSpaced label="Sensibilité esthétique" />
              </Box>
            </ChipTree>
          </BoxXsResponsiveRowCenterColumnStretch>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsSoft;
