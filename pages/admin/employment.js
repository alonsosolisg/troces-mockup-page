import React from 'react'
import Admin from 'layouts/Admin';
import CardEmployment from 'components/Cards/CardEmployment';


export default function Employment()  {
  return (
    <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg mt-6 rounded">
            <CardEmployment />
          </div>
        </div>
      </div>
  )
}

Employment.layout = Admin;