import { forwardRef } from 'react';
import Image from 'next/image';
import soundcloud from 'public/media/soundcloud.png';

const IconSoundcloud = forwardRef((props, ref) => (
  <Image src={soundcloud} ref={ref} height={24} width={24} {...props} />
));

export default IconSoundcloud;
