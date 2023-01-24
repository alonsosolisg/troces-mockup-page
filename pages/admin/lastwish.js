import React from 'react'
import Admin from 'layouts/Admin';
import CardWish from 'components/Cards/CardWish';


export default function Lastwish()  {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg mt-6 rounded">
            <CardWish />
          </div>
        </div>
      </div>
  )
}

Lastwish.layout = Admin;