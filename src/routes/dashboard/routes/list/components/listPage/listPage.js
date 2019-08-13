import React from 'react'
import ListForm from './listForm'

export default function listPage({submitForm}) {
       return(
          <div>
             <p className="title">List your home for sale</p>
             <ListForm
             handleForm={submitForm}
             />
          </div>
       )
}
