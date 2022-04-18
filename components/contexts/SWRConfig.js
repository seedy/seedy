import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import fetcher from 'helpers/fetcher';
import { useMemo } from 'react';

const SEARCH_SWR_CONFIG = {
  fetcher,
};

const GlobalSWRConfig = ({ value = {}, ...props }) => {
  const mergedValue = useMemo(() => ({ ...SEARCH_SWR_CONFIG, ...value }), [value]);

  return (
    <SWRConfig value={mergedValue} {...props} />
  );
};

GlobalSWRConfig.propTypes = {
  value: PropTypes.shape({
    fetcher: PropTypes.func,
  }),
};

GlobalSWRConfig.defaultProps = {
  value: {},
};

export default GlobalSWRConfig;
