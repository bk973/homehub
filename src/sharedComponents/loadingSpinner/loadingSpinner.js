import React from 'react'
import './loadingSpinner.css'

export default function LoadingSpinner() {
  return (
    <div className="w-full flex justify-center py-6">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

  )
}
