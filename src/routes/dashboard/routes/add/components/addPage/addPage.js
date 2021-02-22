import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { useFirestore, useFirebase } from 'react-redux-firebase'

//utils
import { Context } from '../../../../../../utils/context'

//components
import AddForm from './components/addForm'
import AddImages from './components/addImages'
import LoadingSpinner from '../../../../../../sharedComponents/loadingSpinner'


function AddPage() {
  let context = React.useContext(Context) //initialize context
  let firestore = useFirestore() //initialize firestore
  let firebase = useFirebase() //initialize firebase
  let uid = context.auth.uid //grab user's id, from auth object, from context 

  let [urls, setUrls] = useState([]) //uuploaded files urls

  const uploadImage = (image) => {
    try {
      //upload files each file to storage, resolve with file's url and add it to urls state
      firebase.uploadFile('homehub/listings/images', image, null, {})
        .then(
          f => f.uploadTaskSnapshot.ref.getDownloadURL()
            .then(
              url => setUrls(prevState => [...prevState, url])
            )
        )
    } catch (e) {
      console.log(e.message)
    }
  }

  /** Construct listing from values and upload to cloud firestore */
  let addListing = (values) => {
    try {
      //add document to firestore
      firestore.collection('listings')
        .add({
          fileUrls: urls,
          title: values.title,
          description: values.description,
          location: values.location,
          currentPrice: values.currentPrice,
          previousPrice: values.previousPrice,
          currency: values.currency,
          user_id: uid,
          created: firestore.FieldValue.serverTimestamp()
        })
        .then(
          //After adding doc to firestore, reset urls array in state
          () => setUrls([]) 
        )
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="w-full md:pl-12 md:py-12 flex flex-col space-y-4 md:space-y-12">

      <div className="w-full md:w-1/2 flex flex-col space-y-6">
       <h3 className="text-indigo-500 text-2xl md:text-3xl font-light">
         So you have a property to showcase for sale?
         It's easy, lets get started!
         </h3>
        <AddImages
          uploadImage={uploadImage}
          imageUrls={urls}
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col space-y-12">
        <h3 className="text-2xl md:text-3xl font-light text-indigo-500">
          Teach us more about your listing, by adding details below...
        </h3>
        <AddForm handleSubmit={addListing} />
      </div>

    </div>
  )
}

export default AddPage

