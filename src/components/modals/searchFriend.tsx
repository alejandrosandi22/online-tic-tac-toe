import InviteCard from 'components/shared/inviteCard';

export default function SearchFriend() {
  return (
    <div className='w-full lg:w-[508px] bg-white rounded-md px-8 py-10 flex flex-col items-center justify-center border border-gray-300'>
      <h2 className='font-extrabold text-primary-900 text-3xl mb-10 text-center'>
        Look for a friend
      </h2>
      <div className='max-w-xs w-full space-y-4'>
        <form className='w-full'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 dark:text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white hover:bg-gray-50'
              placeholder='Friend name, email or id'
              required
            />
          </div>
        </form>
        <div
          aria-label='results'
          className=' bg-white rounded-md w-full p-4 space-y-4 max-h-48 overflow-y-auto'
        >
          <InviteCard />
          <InviteCard />
          <InviteCard />
          <InviteCard />
        </div>
      </div>
    </div>
  );
}
