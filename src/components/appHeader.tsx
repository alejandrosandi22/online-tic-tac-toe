import { useState } from 'react';
import UserProfile from './modals/userProfile';
import Modal from './shared/modal';

export default function AppHeader() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <header className='flex justify-end w-full gap-2 p-5'>
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
    </header>
  );
}
