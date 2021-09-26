import PropTypes from 'prop-types';

import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import { forwardRef } from 'react';

// COMPONENTS
const MenuItemLink = forwardRef(({
  href, passHref,
  as, prefetch, replace, scroll, shallow, locale,
  children,
  ...props
}, ref) => (
  <Link
    href={href}
    passHref={passHref}
    as={as}
    prefetch={prefetch}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    locale={locale}
  >
    <MenuItem ref={ref} component="a" {...props}>{children}</MenuItem>
  </Link>
));

MenuItemLink.propTypes = {
  href: PropTypes.string.isRequired,
  passHref: PropTypes.bool,
  as: PropTypes.string,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
  locale: PropTypes.string,
  children: PropTypes.node,
};

MenuItemLink.defaultProps = {
  passHref: false,
  as: undefined,
  prefetch: undefined,
  replace: false,
  scroll: true,
  shallow: false,
  locale: undefined,
  children: null,
};

export default MenuItemLink;
