import React from 'react'

export default function Preview({file, delete,}) {
  return (
    <div>
      <img src={file} alt="" className="h-200 w-200"/>
    </div>
  )
}
