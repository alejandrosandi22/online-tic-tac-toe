import UserProfile from 'components/modals/userProfile';
import { useState } from 'react';
import Modal from './modal';

export default function InviteCard() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 rounded-full border border-gray-300'>
        <img
          className='rounded-full'
          src='https://randomuser.me/api/portraits/men/32.jpg'
          alt='Profile Picture'
        />
      </div>
      <div>
        <button onClick={() => setShow(true)} className='block'>
          <p className='text-lg font-bold block'>Thomas Gould</p>
          <Modal show={show} setShow={setShow}>
            <UserProfile />
          </Modal>
        </button>
        <button className='text-xs text-white rounded bg-primary-700 hover:bg-primary-800 px-2.5 py-1'>
          Invite
        </button>
      </div>
    </div>
  );
}
