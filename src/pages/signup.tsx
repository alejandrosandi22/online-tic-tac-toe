import AppLayout from 'layouts/appLayout';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function Signin() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    //signIn('email', { email }).finally(() => setLoading(false));
  };

  return (
    <AppLayout title='Sign Up | Tic Tac Toe'>
      <section className='w-full h-screen flex justify-center items-center'>
        <div className='w-full lg:w-[508px] bg-white rounded-md px-8 py-10 flex flex-col items-center justify-center border border-gray-300'>
          <div className='relative w-full flex items-center justify-center mb-10 '>
            <Link href='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='absolute w-6 h-6 left-8 text-primary-900 hover:text-primary-800'
              >
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z'
                  fill='currentColor'
                />
              </svg>
            </Link>
            <h2 className='font-extrabold text-primary-900 text-3xl text-center'>
              Sign up
            </h2>
          </div>
          <form className='w-80' onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-black'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus-within:outline-primary-500 block w-full p-2.5'
                required
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-black'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus-within:outline-primary-500 block w-full p-2.5'
                required
              />
            </div>
            <div className='mb-2'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium text-black'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus-within:outline-primary-500 block w-full p-2.5'
                required
              />
            </div>
            <button
              type='submit'
              className='flex gap-2 justify-center text-white bg-primary-700 hover:bg-primary-800 w-full focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2'
            >
              {loading ? (
                <svg
                  role='status'
                  className='inline mr-3 w-4 h-4 text-white animate-spin'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='#E5E7EB'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentColor'
                  />
                </svg>
              ) : (
                'Sign up'
              )}
            </button>
            <div className='relative flex items-center justify-center my-5'>
              <span className='absolute bg-white rounded-full border border-gray-300 w-8 h-8 flex items-center justify-center text-black text-sm'>
                or
              </span>
              <hr className='border-gray-300 my-5 w-full' />
            </div>
            <div className='flex justify-center'>
              <button
                type='button'
                className='border border-gray-300 bg-white hover:bg-gray-100 focus:ring-[#3b5998]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  className='w-6 h-6 text-[#3b5998]'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z'
                    fill='currentColor'
                  />
                </svg>
              </button>
              <button
                type='button'
                className='border border-gray-300 bg-white hover:bg-gray-100 focus:ring-[#4285F4]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-2'
              >
                <svg
                  width='24px'
                  height='24px'
                  viewBox='-0.5 0 48 48'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <defs></defs>
                  <g
                    id='Icons'
                    stroke='none'
                    strokeWidth={1}
                    fill='none'
                    fillRule='evenodd'
                  >
                    <g
                      id='Color-'
                      transform='translate(-401.000000, -860.000000)'
                    >
                      <g
                        id='Google'
                        transform='translate(401.000000, 860.000000)'
                      >
                        <path
                          d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
                          id='Fill-1'
                          fill='#FBBC05'
                        ></path>
                        <path
                          d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
                          id='Fill-2'
                          fill='#EB4335'
                        ></path>
                        <path
                          d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
                          id='Fill-3'
                          fill='#34A853'
                        ></path>
                        <path
                          d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
                          id='Fill-4'
                          fill='#4285F4'
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <button
                type='button'
                className='border border-gray-300 bg-white hover:bg-gray-100  focus:ring-[#1da1f2]/50 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex justify-center items-center mr-2 mb-2'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path
                    d='M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z'
                    fill='rgba(0,170,236,1)'
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>
    </AppLayout>
  );
}
