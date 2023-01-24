import React from 'react'
import Admin from 'layouts/Admin';
import CardCats from 'components/Cards/CardCats';
import CardArticles from 'components/Cards/CardArticles';


export default function Other()  {
  return (
    <div className=' flex flex-direction-column '>
        <div className='w-full px-2'>
            <CardCats/>
        </div>
        <div className='w-full px-2'>
            <CardArticles/>
        </div>
    </div>
  )
}

Other.layout = Admin;