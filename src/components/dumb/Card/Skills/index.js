import { useMemo, useCallback, useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// CONTAINER
export const ContainerContext = createContext({
  container: null,
});

// HOOKS
export const useContainerContext = () => useContext(ContainerContext);

// COMPONENTS
const CardSkills = ({ avatar, title, subheader, children, ...props }) => {
  const [container, setContainer] = useState(null);

  const onRef = useCallback(
    (node) => setContainer(node),
    [setContainer],
  );

  const value = useMemo(
    () => ({
      container,
    }),
    [container],
  );

  return (
    <Card {...props}>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CardHeader
            sx={{
              padding: 0,
            }}
            avatar={avatar}
            title={title}
            subheader={subheader}
          />
        </AccordionSummary>
        <AccordionDetails
          sx={{
            flexDirection: 'column',
            paddingBottom: 1,
          }}
        >
          <ContainerContext.Provider value={value}>
            {children}
          </ContainerContext.Provider>
          <div ref={onRef} />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

CardSkills.propTypes = {
  avatar: PropTypes.node,
  title: PropTypes.node,
  subheader: PropTypes.node,
  children: PropTypes.node,
};

CardSkills.defaultProps = {
  avatar: null,
  title: null,
  subheader: null,
  children: null,
};

export default CardSkills;
