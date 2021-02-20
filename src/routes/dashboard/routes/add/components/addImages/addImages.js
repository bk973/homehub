import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Thumb from './components/Thumb'

export default function AddImages({ uploadImage, imageUrls }) {

  let [isUploading, setIsUploading] = useState(false)

  const { getInputProps, getRootProps } = useDropzone({
    onDrop: acceptedFiles => {
      setIsUploading(true)
      acceptedFiles.map((f) => {
        uploadImage(f)
      })
      setIsUploading(false)
    }
  })
  return (
    <div className=" flex flex-col">
      <p className="w-full text-center md:text-left mb-2 mt-6 text-sm font-loght text-gray-500">Add 1 or more images to upload, you can also drag and drop files here</p>
      <div {...getRootProps({ className: 'dropzone' })} className="border-2 rouded-lg border-gray-300 flex space-x-2 border-dashed px-2 py-8">
        <input {...getInputProps()} />
        <button className="flex text-center flex-none h-1/2 m-2 rounded-full font-bold bg-indigo-500 text-white p-8"><i className="fas fa-plus fa-xl"></i></button>
        <div className="flex flex-col md:flex-row md:space-x-2">
          {
            imageUrls && imageUrls.map(
              (url, i) => (
                <Thumb
                  key={i}
                  url={url}
                />
              )
            )
          }
        </div>
      </div>
    </div>

  )
}
