import { useCallback, useState } from 'react';

import CardSkills, { ContainerContext } from 'components/dumb/Card/Skills';
import ChipTree from 'components/dumb/Chip/Tree';
import Box from '@mui/material/Box';
import AvatarSecondary from 'components/dumb/Avatar/Secondary';
import BoxXsResponsiveRowCenterColumnStretch from 'components/dumb/Box/XsResponsive/RowCenterColumnStretch';
import ChipSpaced from 'components/dumb/Chip/Spaced';

import CodeIcon from '@mui/icons-material/Code';
import DesktopIcon from '@mui/icons-material/DesktopMac';
import GestureIcon from '@mui/icons-material/Gesture';
import { useTranslation } from 'next-i18next';
import AvatarGroupAnimationRoll from 'components/dumb/Avatar/GroupAnimation/Roll';

// CONSTANTS
const JAVASCRIPT = 'JS';
const REACT = 'React';
const UX = 'UX';
const DESIGN = 'Design';

// COMPONENTS
const CardSkillsTech = (props) => {
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

  const { t } = useTranslation('skills');

  return (
    <CardSkills
      avatar={(
        <AvatarGroupAnimationRoll spacing="small">
          <AvatarSecondary>
            <CodeIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <DesktopIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <GestureIcon />
          </AvatarSecondary>
        </AvatarGroupAnimationRoll>
      )}
      title={t('skills:techSkills')}
      subheader={t('skills:frontend')}
      {...props}
    >
      <ContainerContext.Consumer>
        {({ container }) => (
          <BoxXsResponsiveRowCenterColumnStretch
            justifyContent="space-between"
          >
            <ChipTree
              container={container}
              label={JAVASCRIPT}
              active={activeSkill === JAVASCRIPT}
              onClick={onJavascript}
            >
              <Box>
                <ChipSpaced label="ES2021" />
                <ChipSpaced label="JSS" />
                <ChipSpaced label={t('skills:functionalProgramming')} />
                <ChipSpaced label={t('skills:currying')} />
                <ChipSpaced label={t('skills:typescript')} />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={REACT}
              active={activeSkill === REACT}
              onClick={onReact}
            >
              <Box>
                <ChipSpaced label={t('skills:hooks')} />
                <ChipSpaced label={t('skills:contextApi')} />
                <ChipSpaced label={t('skills:stateManagement')} />
                <ChipSpaced label={t('skills:dataFetching')} />
                <ChipSpaced label={t('skills:suspense')} />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={UX}
              active={activeSkill === UX}
              onClick={onUX}
            >
              <Box>
                <ChipSpaced label={t('skills:responsive')} />
                <ChipSpaced label={t('skills:emptyState')} />
                <ChipSpaced label={t('skills:accessibility')} />
                <ChipSpaced label={t('skills:animations')} />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={DESIGN}
              active={activeSkill === DESIGN}
              onClick={onDesign}
            >
              <Box>
                <ChipSpaced label={t('skills:mockups')} />
                <ChipSpaced label={t('skills:userScenarii')} />
                <ChipSpaced label={t('skills:componentLibrary')} />
                <ChipSpaced label={t('skills:designSystems')} />
              </Box>
            </ChipTree>
          </BoxXsResponsiveRowCenterColumnStretch>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsTech;
