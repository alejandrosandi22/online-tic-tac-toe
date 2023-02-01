import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import UserProfile from './modals/userProfile';
import Modal from './shared/modal';

export default function AppHeader() {
  const [show, setShow] = useState<boolean>(false);
  const { pathname } = useRouter();

  return (
    <header className='flex justify-between w-full gap-2 py-5 px-8 container mx-auto'>
      <div className='flex items-center justify-between'>
        {pathname !== '/' && (
          <Link
            href='/'
            className='flex text-primary-900 hover:text-primary-800'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='w-6 h-6'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z'
                fill='currentColor'
              />
            </svg>
            <span className='hidden lg:inline-block'>Get out</span>
          </Link>
        )}
      </div>
      <div className='flex gap-2'>
        <button onClick={() => setShow(true)} className='flex flex-col'>
          <p className='text-lg font-bold'>Thomas Gould</p>
          <p className='text-sm font-bold text-gray-600'>id: 1386611541551</p>
        </button>
        <button
          onClick={() => setShow(true)}
          className='relative w-12 h-12 rounded-full border border-gray-300'
        >
          <img
            className='rounded-full'
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='Profile Picture'
          />
        </button>
        <Modal show={show} setShow={setShow}>
          <UserProfile />
        </Modal>
      </div>
    </header>
  );
}
