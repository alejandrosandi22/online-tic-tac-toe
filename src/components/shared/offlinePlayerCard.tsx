export default function OfflinePlayerCard() {
  return (
    <div className='flex items-center gap-3'>
      <div className='grid place-items-center w-12 h-12 rounded-full border border-gray-300'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 80 80'
          className='w-5 h-5 text-primary-700'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M40 31.1125L71.1125 0L80 8.88749L48.8875 40L80 71.1125L71.1125 80L40 48.8875L8.88749 80L0 71.1125L31.1125 40L0 8.88749L8.88749 0L40 31.1125Z'
            fill='currentColor'
          />
        </svg>
      </div>
      <div className='flex flex-col'>
        <p className='text-lg font-bold'>Thomas Gould</p>
        <p className='text-sm font-bold text-gray-600'>id: 1386611541551</p>
      </div>
    </div>
  );
}
