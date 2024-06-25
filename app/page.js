import backgroundImage from '@/public/Home/book-bg-1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className=' flex flex-col relative justify-center items-center h-screen text-gray-950 '>
      <Image
        className=' blur-[2px] '
        src={backgroundImage}
        alt='background image with books'
        fill
        sizes='100vw'
        style={{ objectFit: 'cover' }}
      />

      <div className=' flex flex-col justify-center items-center bg-purple-100/40 rounded-md p-2 z-10 lg:w-2/5 h-1/4 filter backdrop-blur-[5px]'>
        <div className=' flex pb-5 text-5xl text-purple-800 '>
          <SparklesIcon className=' size-12 ' />
          <p>Bookworms</p>
        </div>
        <div>
          <Link
            className=' bg-purple-700 text-white rounded-sm p-2 '
            href='/store'
          >
            Take me to the store
          </Link>
        </div>
      </div>
    </div>
  );
}
