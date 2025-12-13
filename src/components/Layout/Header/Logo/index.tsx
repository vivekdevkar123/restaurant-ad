import Image from 'next/image';
import Link from 'next/link';
import { imageUrl } from '@/utils/publicPath';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
        <Image
          src={imageUrl('/images/logo/icon.jpg')}
        alt="logo"
        width={160}
        height={50}
        className='h-12 w-auto object-contain max-w-[120px] rounded-lg'
        quality={100}
      />
  Sopu's Cloud kitchen
    </Link>
  );
};

export default Logo;
