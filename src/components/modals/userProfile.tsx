export default function UserProfile() {
  return (
    <div className='w-full lg:w-[508px] bg-white rounded-md px-8 py-10 flex flex-col items-center justify-center border border-gray-300'>
      <h2 className='font-extrabold text-primary-900 text-3xl mb-10 text-center'>
        User profile
      </h2>
      <div className='space-y-4 w-full'>
        <div className='flex justify-between items-center'>
          <h3 className='font-medium text-lg'>Id</h3>
          <p className='text-base'>1223546484</p>
        </div>
        <div className='flex justify-between items-center'>
          <h3 className='font-medium text-lg'>Profile picture</h3>
          <img
            className='rounded-full w-12 h-12'
            src='https://randomuser.me/api/portraits/men/32.jpg'
            alt='Profile Picture'
          />
        </div>
        <div className='flex justify-between items-center'>
          <h3 className='font-medium text-lg'>Name</h3>
          <p className='text-base'>Thomas Gould</p>
        </div>
        <div className='flex justify-between items-center'>
          <h3 className='font-medium text-lg'>Email</h3>
          <p className='text-base'>thomasgould@gmail.com</p>
        </div>
      </div>
      <div className='w-full flex justify-between items-center mt-8'>
        <button
          type='button'
          className='font-medium text-sm text-center inline-flex items-center hover:text-gray-700'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='w-6 h-6 mr-2'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z'
              fill='currentColor'
            />
          </svg>
          Sign out
        </button>
        <button
          type='button'
          className='font-medium text-sm text-center inline-flex items-center bg-red-600 hover:bg-red-700 px-8 py-3 text-white rounded-md'
        >
          Delete account
        </button>
      </div>
    </div>
  );
}
