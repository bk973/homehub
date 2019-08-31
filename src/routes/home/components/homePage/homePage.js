import React from 'react'
import MainNav from './components/mainNav'
import Footer from './components/footer'
import { GoogleLoginButton }  from 'react-social-login-buttons'
import { SIGNUP_PATH } from '../../../../constants/paths'
import { Link } from 'react-router-dom'

import { ReactComponent as House  } from '../../../../static/house.svg'
import { ReactComponent as Savings} from '../../../../static/savings.svg'
import { ReactComponent as Setup} from '../../../../static/setup.svg'
import './homePage.scss'

export default function homePage({firebase, googleLogin}) {
    return (
        <React.Fragment>
          <MainNav/>
          <div className="section-padding">
           <div className=" container is-fluid">
            <div className="columns">
               <div className="column">
                    <h3 className="title is-3">
                      The easiest way you can own a house!
                    </h3>
                    <div className=" box">
                      <GoogleLoginButton onClick={googleLogin}/>
                     <p>By logging in, you agree to the<Link to=""> terms of service </Link>of this website</p>
                   </div>
                </div>
                <div className="column"></div>
            </div>
           </div>
          </div>
           <div className=" section-padding white-bg">
             <div className="container is-fluid">
             <div className="columns">
                <div className=" column"> 
                <p className="title">Discover beautiful homes, buy anytime!</p>
                <p>Are you searching for a beautiful home to buy? You are at the right place.
                  Signup for free and start discovering a wide rage of amazing homes.
                </p>
                </div>
                <div className="column">
                <House width="400" height="200"/>
                </div>
             </div>
             </div>
           </div>

           <div className="section-padding ">
             <div className="container is-fluid">
             <div className="columns">
                <div className="column">
                 <Setup width="400" height="200"/>
                </div>
                <div className="column">
                   <p className="title">List your home for sale!</p>
                   <p>List your home for sale, and our job is to make sure it gets bought by someone.
                   </p> 
                </div>
             </div>
             </div>
           </div>

           <div className="section-padding white-bg">
             <div className="container is-fluid">
             <div className=" columns">
                <div className="column"> 
                   <p className="title">Real estate and beyond!</p>
                   <p>We don't stop at helping you sell or discover beautiful homes,
                     We also help you acquire your own home through progressive savings and loans
                   </p>
                </div>
                <div className="column">
                <Savings width="400" height="200"/>
                </div>
             </div>
             </div>
           </div>

           
           <div className="section-padding">
             <div className="container">
               <div className="columns">
               <div className="column">
                  <p>
                  <h2 className="title is-3">
                    Ready to get started?
                  </h2>
                  <h3 className="subtitle ">
                    Get in touch or create account
                  </h3>
                  </p>
                </div>
                <div className="column">
                    <Link to={SIGNUP_PATH} className="button">Create account</Link>
                    <Link to="" className="button">Contact sales</Link>
                </div>
               </div>
             </div>
           </div>

          <Footer/>
        </React.Fragment>
    )
}
