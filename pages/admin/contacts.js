import React from 'react'
import Admin from 'layouts/Admin';
import CardContacts from 'components/Cards/CardContacts';


export default function Contacts()  {
  return (
    <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardContacts />
        </div>
      </div>
  )
}

Contacts.layout = Admin;