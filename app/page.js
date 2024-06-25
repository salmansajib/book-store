import backgroundImage from '@/public/Home/book-bg.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src={backgroundImage}
        alt='background image with books'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
