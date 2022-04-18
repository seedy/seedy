import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useCallback, useMemo, useState } from 'react';
import styled from '@mui/material/styles/styled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
  0% {
    transform: translateY(0)
  }

  50% {
    transform: translateY(-20%)
  }

  100% {
    transform: translateY(0%)
  }
`;

const ThumbUpIconBounce = styled(ThumbUpIcon, {
  shouldForwardProp: (prop) => prop !== 'voted',
})({
  '&:hover': {
    transform: 'translateY(-10%)',
  },
},
(props) => props.voted && ({
  animation: `${bounce} 1s ease`,
}));

const ButtonUpvote = ({ votes, onClick, children }) => {
  const [voted, setVoted] = useState(false);

  const disabled = useMemo(() => voted, [voted]);

  const handleClick = useCallback(
    async () => {
      setVoted(true);
      await onClick();
    },
    [setVoted, onClick],
  );

  return (
    <Button sx={{ display: 'flex' }} color="secondary" variant="contained" startIcon={<ThumbUpIconBounce voted={voted} />} onClick={handleClick} disabled={disabled}>
      {children}
      <Divider sx={{ borderColor: 'currentColor', mx: 1 }} orientation="vertical" flexItem />
      {votes}
    </Button>
  );
};
ButtonUpvote.propTypes = {
  children: PropTypes.node.isRequired,
  votes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonUpvote;
