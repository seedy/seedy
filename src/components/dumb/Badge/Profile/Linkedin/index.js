import useScript from 'hooks/useScript';

import CircularProgress from '@material-ui/core/CircularProgress';

import ErrorIcon from '@material-ui/icons/Error';

// COMPONENTS
const LinkedinBadgeProfile = () => {
  const { error, loading, done } = useScript(
    'https://platform.linkedin.com/badges/js/profile.js',
    {
      async: true,
      defer: true,
      type: 'text/javascript',
    },
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <ErrorIcon />;
  }

  if (done) {
    return (
      <div
        className="badge-base LI-profile-badge"
        // @TODO handle locale
        data-locale="fr_FR"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="cedric-dupuis-69470"
        data-version="v1"
      />
    );
  }

  return null;
};

export default LinkedinBadgeProfile;
