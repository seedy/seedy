import { forwardRef } from 'react';

const IconSoundcloud = forwardRef((props, ref) => (
  <iframe
    ref={ref}
    allowtransparency="true"
    scrolling="no"
    frameBorder="no"
    src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fseedygging&color=orange_transparent&size=24"
    style={{ width: '24px', height: '24px' }}
    title="SoundCloud"
    {...props}
  />
));

export default IconSoundcloud;
