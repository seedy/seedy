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
import { useTranslation } from 'next-i18next';

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

  const { t } = useTranslation('skills');

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
      title={t('skills:softSkills')}
      subheader={t('skills:remote')}
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
                <ChipSpaced label={t('skills:communication')} />
                <ChipSpaced label={t('skills:proaction')} />
                <ChipSpaced label={t('skills:listening')} />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={MENTOR}
              active={activeSkill === MENTOR}
              onClick={onMentor}
            >
              <Box>
                <ChipSpaced label={t('skills:goodPractices')} />
                <ChipSpaced label={t('skills:documentation')} />
                <ChipSpaced label={t('skills:peerProgramming')} />
                <ChipSpaced label={t('skills:patience')} />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={INDIVIDUAL}
              active={activeSkill === INDIVIDUAL}
              onClick={onIndividual}
            >
              <Box>
                <ChipSpaced label={t('skills:rigor')} />
                <ChipSpaced label={t('skills:organized')} />
                <ChipSpaced label={t('skills:enthusiasm')} />
                <ChipSpaced label={t('skills:dynamism')} />
              </Box>
            </ChipTree>
          </BoxXsResponsiveRowCenterColumnStretch>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsSoft;
