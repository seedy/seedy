import { forwardRef } from 'react';
import Image from 'next/image';

const IconSoundcloud = forwardRef((props, ref) => (
  <Image src="/media/soundcloud.png" ref={ref} height={24} width={24} {...props} />
));

export default IconSoundcloud;
