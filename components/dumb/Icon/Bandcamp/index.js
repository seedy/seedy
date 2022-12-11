import { forwardRef } from 'react';
import Image from 'next/image';
import bandcamp from 'public/media/bandcamp.png';

const IconBandcamp = forwardRef((props, ref) => (
  <Image src={bandcamp} ref={ref} height={24} width={24} {...props} />
));

export default IconBandcamp;
