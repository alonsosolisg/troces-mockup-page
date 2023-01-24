import React from 'react'
import Admin from 'layouts/Admin';
import CardStats from 'components/Cards/CardStats';


export default function Mental()  {
  return (
    <div className='mt-10 h-full'>        
        <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h1 className="mt-6 text-BLACK uppercase font-bold text-xl text-center">
                GET MENTAL HELP THROUGH THESE CHANNELS
              </h1>
              <div className='flex flex-direction-column justify-center text-center mb-8'>
              <div className="mt-12 items-center text-center px-2">
                <a
                    target="_blank"
                  href="https://www.eluliin.ee/en"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-green-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Emotional Support Line
                </a>
              </div>
              <div className="mt-12 items-center text-center px-2">
                <a
                    target="_blank"
                  href="https://toetus.ee/kriisinoustamine/"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-green-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Crisis Councelling
                </a>
              </div>
              <div className="mt-12 items-center text-center px-2">
                <a
                  target="_blank"
                  href="https://heaolu.ee/leinateraapia"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-green-500 active:bg-green-400 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Grief Councelling
                </a>
              </div>
              </div>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
            </div>
          </div>
          
        </div>
      </div>
    </>
    </div>

  )
}

Mental.layout = Admin;