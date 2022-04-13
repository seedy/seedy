import { forwardRef } from 'react';
import Image from 'next/image';

const IconBandcamp = forwardRef((props, ref) => (
  <Image src="/media/bandcamp.png" ref={ref} height={24} width={24} {...props} />
));

export default IconBandcamp;
