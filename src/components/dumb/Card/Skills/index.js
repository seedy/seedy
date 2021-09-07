import { useMemo, useCallback, useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// CONTAINER
export const ContainerContext = createContext({
  container: null,
});

// HOOKS
export const useContainerContext = () => useContext(ContainerContext);

const useStyles = makeStyles((theme) => ({
  accordionDetailsCard: {
    flexDirection: 'column',
    paddingBottom: theme.spacing(1),
  },
  cardHeaderDense: {
    padding: theme.spacing(0),
  },
}));

// COMPONENTS
const CardSkills = ({ avatar, title, subheader, children, ...props }) => {
  const classes = useStyles();

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
            className={classes.cardHeaderDense}
            avatar={avatar}
            title={title}
            subheader={subheader}
          />
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailsCard}>
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
