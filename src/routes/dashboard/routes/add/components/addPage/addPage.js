import React from 'react'
import ListForm from './addForm'

export default function addPage({submitForm}) {
       return(
          <div className="">
             <p className="title">List your home for sale</p>
             <ListForm
             handleForm={submitForm}
             />
              <ListForm
             handleForm={submitForm}
             />
          </div>
       )
}
