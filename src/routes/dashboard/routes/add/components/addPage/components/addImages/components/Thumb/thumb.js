import React, { useState } from 'react'

export default function Thumb({ url, isUploading }) {
  return (
    <img
      alt={url}
      src={url}
      className="h-24 w-24 border-2 border-gray-300" />
  )
}
