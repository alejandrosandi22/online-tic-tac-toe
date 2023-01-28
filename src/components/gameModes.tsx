import { useState } from 'react';
import SearchFriend from './modals/searchFriend';
import SelectPlayersName from './modals/selectPlayersName';
import Signin from './modals/signin';
import Modal from './shared/modal';

export default function GameModes() {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showMultiplayer, setShowMultiplayer] = useState<boolean>(false);

  return (
    <div className='flex gap-16'>
      <button className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'>
        Play offline
      </button>
      <div>
        <button
          onClick={() => setShowMultiplayer(true)}
          className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Multiplayer offline
        </button>
        <Modal show={showMultiplayer} setShow={setShowMultiplayer}>
          <SelectPlayersName />
        </Modal>
      </div>
      <div>
        <button
          onClick={() => setShowSignIn(true)}
          className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Play with a friend
        </button>
        <Modal show={showSignIn} setShow={setShowSignIn}>
          <Signin />
        </Modal>
      </div>
    </div>
  );
}
