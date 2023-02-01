import { useState } from 'react';
import SearchFriend from './modals/searchFriend';
import SelectPlayer from './modals/selectName';
import SelectPlayersName from './modals/selectPlayersName';
import Signin from './modals/signin';
import Modal from './shared/modal';

export default function GameModes() {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showMultiplayer, setShowMultiplayer] = useState<boolean>(false);
  const [showLocal, setShowLocal] = useState<boolean>(false);

  return (
    <div className='flex gap-8 flex-col md:flex-row'>
      <button
        onClick={() => setShowLocal(true)}
        className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
      >
        One player
      </button>
      <div>
        <button
          onClick={() => setShowMultiplayer(true)}
          className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Two players
        </button>
      </div>
      <div>
        <button
          onClick={() => setShowSignIn(true)}
          className='px-8 py-3 bg-primary-400 hover:bg-primary-500 text-base text-white rounded-md'
        >
          Online
        </button>
        <Modal show={showSignIn} setShow={setShowSignIn}>
          <Signin />
        </Modal>
      </div>
      <Modal show={showMultiplayer} setShow={setShowMultiplayer}>
        <SelectPlayersName />
      </Modal>
      <Modal show={showLocal} setShow={setShowLocal}>
        <SelectPlayer />
      </Modal>
    </div>
  );
}
