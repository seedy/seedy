import { forwardRef, useMemo } from 'react';

import { useRouter } from 'next/router';

import MenuItemLink from 'components/dumb/MenuItem/Link';
import DumbIconButtonTranslate from 'components/dumb/IconButton/Translate';

// COMPONENTS
const IconButtonTranslate = forwardRef((props, ref) => {
  const { locale, pathname } = useRouter();

  const frSelected = useMemo(
    () => locale === 'fr',
    [locale],
  );

  const enSelected = useMemo(
    () => locale === 'en',
    [locale],
  );

  return (
    <DumbIconButtonTranslate ref={ref} {...props}>
      <MenuItemLink
        href={pathname}
        selected={frSelected}
        locale="fr"
      >
        Français
      </MenuItemLink>
      <MenuItemLink
        href={pathname}
        selected={enSelected}
        locale="en"
      >
        English
      </MenuItemLink>
    </DumbIconButtonTranslate>
  );
});

export default IconButtonTranslate;
