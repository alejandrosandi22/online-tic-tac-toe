export default function SelectPlayersName() {
  return (
    <div className='w-full lg:w-[508px] bg-white rounded-md px-8 py-10 flex flex-col items-center justify-center border border-gray-300'>
      <h2 className='font-extrabold text-primary-900 text-3xl mb-10 text-center'>
        Players name
      </h2>
      <form>
        <div className='mb-2 flex items-center gap-1'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-black whitespace-nowrap'
          >
            Player 1:
          </label>
          <input
            type='email'
            id='email'
            className='bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus-within:outline-primary-500 block w-full p-2.5'
            required
          />
          <div>
            <input type='radio' name='options-player1' id='x-option1' hidden />
            <label
              htmlFor='x-option1'
              className='border border-gray-300 bg-white hover:bg-gray-100 focus:ring-[#4285F4]/50 font-medium rounded text-sm px-2.5 py-2.5 text-center inline-flex justify-center items-center'
            >
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
            </label>
          </div>
          <div>
            <input type='radio' name='options-player1' id='o-option1' hidden />
            <label
              htmlFor='o-option1'
              className='border border-gray-300 bg-white hover:bg-gray-100  focus:ring-[#1da1f2]/50 font-medium rounded text-sm px-2.5 py-2.5 text-center inline-flex justify-center items-center'
            >
              <svg
                viewBox='0 0 80 80'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-primary-700'
              >
                <path
                  d='M40 80C17.908 80 0 62.092 0 40C0 17.908 17.908 0 40 0C62.092 0 80 17.908 80 40C80 62.092 62.092 80 40 80ZM40 72C48.4869 72 56.6263 68.6286 62.6274 62.6274C68.6286 56.6263 72 48.4869 72 40C72 31.5131 68.6286 23.3737 62.6274 17.3726C56.6263 11.3714 48.4869 8 40 8C31.5131 8 23.3737 11.3714 17.3726 17.3726C11.3714 23.3737 8 31.5131 8 40C8 48.4869 11.3714 56.6263 17.3726 62.6274C23.3737 68.6286 31.5131 72 40 72Z'
                  fill='#5ACCDC'
                />
              </svg>
            </label>
          </div>
        </div>
        <div className='mb-2 flex items-center gap-1'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-black whitespace-nowrap'
          >
            Player 2:
          </label>
          <input
            type='email'
            id='email'
            className='bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus-within:outline-primary-500 block w-full p-2.5'
            required
          />
          <div>
            <input type='radio' name='options-player2' id='x-option2' hidden />
            <label
              htmlFor='x-option2'
              className='border border-gray-300 bg-white hover:bg-gray-100 focus:ring-[#4285F4]/50 font-medium rounded text-sm px-2.5 py-2.5 text-center inline-flex justify-center items-center'
            >
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
            </label>
          </div>
          <div>
            <input type='radio' name='options-player2' id='o-option2' hidden />
            <label
              htmlFor='o-option2'
              className='border border-gray-300 bg-white hover:bg-gray-100  focus:ring-[#1da1f2]/50 font-medium rounded text-sm px-2.5 py-2.5 text-center inline-flex justify-center items-center'
            >
              <svg
                viewBox='0 0 80 80'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5 text-primary-700'
              >
                <path
                  d='M40 80C17.908 80 0 62.092 0 40C0 17.908 17.908 0 40 0C62.092 0 80 17.908 80 40C80 62.092 62.092 80 40 80ZM40 72C48.4869 72 56.6263 68.6286 62.6274 62.6274C68.6286 56.6263 72 48.4869 72 40C72 31.5131 68.6286 23.3737 62.6274 17.3726C56.6263 11.3714 48.4869 8 40 8C31.5131 8 23.3737 11.3714 17.3726 17.3726C11.3714 23.3737 8 31.5131 8 40C8 48.4869 11.3714 56.6263 17.3726 62.6274C23.3737 68.6286 31.5131 72 40 72Z'
                  fill='#5ACCDC'
                />
              </svg>
            </label>
          </div>
        </div>
        <button
          type='submit'
          className='flex gap-2 justify-center text-white bg-primary-700 hover:bg-primary-800 w-full focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 my-10 '
        >
          Continue
        </button>
      </form>
    </div>
  );
}
