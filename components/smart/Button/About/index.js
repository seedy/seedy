import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';

import { useRouter } from 'next/router';

import ButtonLink from 'components/dumb/Button/Link';

// COMPONENTS
const ButtonAbout = forwardRef(({ title, ...props }, ref) => {
  const { pathname } = useRouter();

  const active = useMemo(() => pathname === routes.about, [pathname]);

  const activeColor = useMemo(
    () => (active ? 'secondary' : undefined),
    [active],
  );

  return (
    <ButtonLink ref={ref} href={routes.about} color={activeColor} {...props}>
      {title}
    </ButtonLink>
  );
});

ButtonAbout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ButtonAbout;
