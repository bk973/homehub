import React from 'react'
import MainNav from './components/mainNav'
import { Link } from 'react-router-dom'
import  house from '../../../../static/house.svg'
import './homePage.scss'

export default function homePage() {
    return (
        <React.Fragment>
          <MainNav/>

          <div class="hero white-bg hero-section">
            <div class="hero-body">
              <div class="container">
                <div className="columns">
                  <div className="column is-three-quaters">
                    <h3 class="title is-3">
                      The easiest way you can own a house!
                    </h3>
                    <h5 class="subtitle is-5">
                     Join the biggest hub for home owners. You can own a house at the best discounts.
                     Get your account for free, today.
                   </h5>
                   <Link className="button is-primary">Start Now</Link>
                  </div>
                  <div className="column">
                        <image src={house} alt="house illustration"/>
                  </div>
                </div>
               </div>
             </div>
           </div>
           
           <div className="section-padding">
             <div className="columns">
                <div className="column"></div>
                <div className="column is-three-quarters">
                  <p className="title is-3 has-text-centered">
                   Get Started with HomeHub Personal account
                  </p>
                </div>
                <div className="column">
                </div>
             </div>
           </div>

           <div className="section-padding">
              <div className="container is-fluid">
                <p className="title is-3 has-text-centered">A better way to manage real estate</p>
                <div className="columns">
                  <div className="column">
                       <div className="box">
                          <p className="title is-4">Great rewards</p>
                          <p></p>
                          <hr className="divider"></hr>
                           <div>
                             <p>
                               <span className="icon is-large"><i class="fas fa-piggy-bank fa-lg"></i></span>
                               <span className="title is-5">Savings that rewards you</span>
                             </p>
                             <p>About the support in a few sentences</p>
                           </div>
                           <hr className="divider"></hr>
                           <Link> 
                              <span> Learn more about our rewards</span>
                              <span className="icon"><i class="fas fa-arrow-right"></i></span>
                           </Link>  
                       </div>
                  </div>
                  <div className="column">
                  <div className="box">
                          <div>
                            <p className="title is-4">Great service</p>
                           <p></p>
                          </div>
                           <hr className="divider"></hr>
                           <div>
                             <p>
                               <span className="icon is-large"><i class="fab fa-accessible-icon fa-lg"></i></span>
                               <span className="title is-5">Support</span>
                             </p>
                             <p>About the support in a few sentences</p>
                           </div>
                           <hr className="divider"></hr>
                           <Link> 
                              <span> Learn more about our rewards</span>
                              <span className="icon"><i class="fas fa-arrow-right"></i></span>
                           </Link>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           <div className="white-bg section-padding">
              <div className="container is-fluid">

              </div>
           </div>

           <div className="container is-fluid section-padding">
             <div className="columns">
               <div className="column">
                  <p>
                  <h2 className="title is-2">
                    Ready to get started?
                  </h2>
                  <h3 className="subtitle is-3">
                    Get in touch or create account
                  </h3>
                  </p>
                </div>
                <div className="column">
                      <Link className="button is-primary is-medium">Create account</Link>
                   
                    <Link className="button is-light is-medium">Contact sales</Link>
                </div>
             </div>
           </div>

           <hr className="divider"></hr>
        </React.Fragment>
    )
}
