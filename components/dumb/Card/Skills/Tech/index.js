import { useCallback, useState } from 'react';

import CardSkills, { ContainerContext } from 'components/dumb/Card/Skills';
import ChipTree from 'components/dumb/Chip/Tree';
import Box from '@mui/material/Box';
import AvatarGroup from '@mui/material/AvatarGroup';
import AvatarSecondary from 'components/dumb/Avatar/Secondary';
import BoxXsResponsiveRowCenterColumnStretch from 'components/dumb/Box/XsResponsive/RowCenterColumnStretch';
import ChipSpaced from 'components/dumb/Chip/Spaced';

import CodeIcon from '@mui/icons-material/Code';
import DesktopIcon from '@mui/icons-material/DesktopMac';
import GestureIcon from '@mui/icons-material/Gesture';

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

  return (
    <CardSkills
      avatar={(
        <AvatarGroup spacing="small">
          <AvatarSecondary>
            <CodeIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <DesktopIcon />
          </AvatarSecondary>
          <AvatarSecondary>
            <GestureIcon />
          </AvatarSecondary>
        </AvatarGroup>
      )}
      title="Tech Skills"
      subheader="Frontend"
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
                <ChipSpaced label="ES6" />
                <ChipSpaced label="ES2020" />
                <ChipSpaced label="FP" />
                <ChipSpaced label="Currying" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={REACT}
              active={activeSkill === REACT}
              onClick={onReact}
            >
              <Box>
                <ChipSpaced label="Hooks" />
                <ChipSpaced label="Context API" />
                <ChipSpaced label="State management" />
                <ChipSpaced label="Data fetching" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={UX}
              active={activeSkill === UX}
              onClick={onUX}
            >
              <Box>
                <ChipSpaced label="Responsive" />
                <ChipSpaced label="Empty state" />
                <ChipSpaced label="Accessibility" />
                <ChipSpaced label="Animations" />
              </Box>
            </ChipTree>
            <ChipTree
              container={container}
              label={DESIGN}
              active={activeSkill === DESIGN}
              onClick={onDesign}
            >
              <Box>
                <ChipSpaced label="Mockups" />
                <ChipSpaced label="User scenarii" />
                <ChipSpaced label="Component library" />
                <ChipSpaced label="Design systems" />
              </Box>
            </ChipTree>
          </BoxXsResponsiveRowCenterColumnStretch>
        )}
      </ContainerContext.Consumer>

    </CardSkills>
  );
};

export default CardSkillsTech;
