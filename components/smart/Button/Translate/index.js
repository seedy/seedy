import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import ButtonLink from 'components/dumb/Button/Link';

// COMPONENTS
const ButtonTranslate = forwardRef(({ children, ...props }, ref) => {
  const { locale, asPath } = useRouter();

  const frSelected = useMemo(
    () => locale === 'fr',
    [locale],
  );

  const enSelected = useMemo(
    () => locale === 'en',
    [locale],
  );

  return (
    <>
      {frSelected ? (
        <ButtonLink
          href={asPath}
          selected={enSelected}
          locale="en"
          ref={ref}
          {...props}
        >
          English
        </ButtonLink>
      ) : (
        <ButtonLink
          href={asPath}
          selected={frSelected}
          locale="fr"
          ref={ref}
          {...props}
        >
          Français
        </ButtonLink>

      ) }

      {children}
    </>
  );
});

ButtonTranslate.propTypes = {
  children: PropTypes.node,
};

ButtonTranslate.defaultProps = {
  children: null,
};

export default ButtonTranslate;
