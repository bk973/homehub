import React from 'react'
import './loginPage.scss'

export default function loginPage({firebase,googleLogin}) {
    return (
        <div className="columns">
            <div className="column"></div>
              <div className="column">
                <div className="box">
                  <button className="button is-danger google-button text-center" onClick={googleLogin}>
                    Login with Google.
                  </button>
                  <hr></hr>
                </div>
              </div>
            <div className="column"></div>
        </div>
    )
}
