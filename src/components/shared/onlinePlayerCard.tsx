import UserProfile from 'components/modals/userProfile';
import { useState } from 'react';
import Modal from './modal';

export default function OnlinePlayerCard() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='flex items-center gap-3'>
      <div className='relative w-12 h-12 rounded-full border border-gray-300'>
        <button onClick={() => setShow(true)} className='flex flex-col'>
          <img
            className='rounded-full'
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='Profile Picture'
          />
          <div className='absolute -bottom-1 -right-1 grid place-items-center w-5 h-5 bg-white rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 80 80'
              className='w-2 h-2 text-primary-700'
            >
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M40 31.1125L71.1125 0L80 8.88749L48.8875 40L80 71.1125L71.1125 80L40 48.8875L8.88749 80L0 71.1125L31.1125 40L0 8.88749L8.88749 0L40 31.1125Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </button>
      </div>
      <button onClick={() => setShow(true)} className='flex flex-col'>
        <p className='text-lg font-bold'>Thomas Gould</p>
        <p className='text-sm font-bold text-gray-600'>id: 1386611541551</p>
      </button>
      <Modal show={show} setShow={setShow}>
        <UserProfile />
      </Modal>
    </div>
  );
}
