import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDc1R4uw3qtFnPrg6pgav_DpxMtsOO9Vdc',
  authDomain: 'online-tic-tac-toe-8dce9.firebaseapp.com',
  databaseURL: 'https://online-tic-tac-toe-8dce9-default-rtdb.firebaseio.com',
  projectId: 'online-tic-tac-toe-8dce9',
  storageBucket: 'online-tic-tac-toe-8dce9.appspot.com',
  messagingSenderId: '341866214439',
  appId: '1:341866214439:web:d83a096a8e7564bce90a02',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
