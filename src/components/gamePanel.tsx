export default function GamePanel({ results }: { results: ResultsType }) {
  return (
    <div className='flex gap-10'>
      <div className='flex flex-col gap-1 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 80 80'
          className='w-8 h-8 text-primary-700'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M40 31.1125L71.1125 0L80 8.88749L48.8875 40L80 71.1125L71.1125 80L40 48.8875L8.88749 80L0 71.1125L31.1125 40L0 8.88749L8.88749 0L40 31.1125Z'
            fill='currentColor'
          />
        </svg>
        <p className='text-primary-700 text-lg font-bold'>{`${results.x} ${
          results.x === 1 ? 'win' : 'wins'
        }`}</p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 80 80'
          className='w-8 h-8 text-secondary-700'
        >
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M40 80C17.908 80 0 62.092 0 40C0 17.908 17.908 0 40 0C62.092 0 80 17.908 80 40C80 62.092 62.092 80 40 80ZM40 72C48.4869 72 56.6263 68.6286 62.6274 62.6274C68.6286 56.6263 72 48.4869 72 40C72 31.5131 68.6286 23.3737 62.6274 17.3726C56.6263 11.3714 48.4869 8 40 8C31.5131 8 23.3737 11.3714 17.3726 17.3726C11.3714 23.3737 8 31.5131 8 40C8 48.4869 11.3714 56.6263 17.3726 62.6274C23.3737 68.6286 31.5131 72 40 72Z'
            fill='currentColor'
          />
        </svg>
        <p className='text-secondary-700 text-lg font-bold'>{`${results.o} ${
          results.o === 1 ? 'win' : 'wins'
        }`}</p>
      </div>
      <div className='flex flex-col gap-1 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          className='w-8 h-8 text-primary-900'
        >
          <path fill='none' d='M0 0H24V24H0z' />
          <path
            d='M13 2v1.278l5 1.668 3.632-1.21.633 1.896-3.032 1.011 3.096 8.512C21.237 16.292 19.7 17 18 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512L13 5.387V19H17v2H7v-2h4V5.387L7.232 6.643l3.096 8.512C9.237 16.292 7.7 17 6 17c-1.701 0-3.237-.708-4.329-1.845l3.094-8.512-3.03-1.01.633-1.898L6 4.945l5-1.667V2h2zm5 7.103l-1.958 5.386c.587.331 1.257.511 1.958.511.7 0 1.37-.18 1.958-.51L18 9.102zm-12 0l-1.958 5.386C4.629 14.82 5.299 15 6 15c.7 0 1.37-.18 1.958-.51L6 9.102z'
            fill='currentColor'
          />
        </svg>
        <p className='text-primary-900 text-lg font-bold'>
          {`${results.draw} ${results.draw === 1 ? 'tie' : 'ties'}`}
        </p>
      </div>
    </div>
  );
}
