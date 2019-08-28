import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import MainNav from './components/mainNav'
import Footer from './components/footer'
import { GoogleLoginButton }  from 'react-social-login-buttons'
import { SIGNUP_PATH } from '../../../../constants/paths'
import { Link } from 'react-router-dom'

import { ReactComponent as House  } from '../../../../static/house.svg'
import { ReactComponent as Savings} from '../../../../static/savings.svg'
import { ReactComponent as Setup} from '../../../../static/setup.svg'

export default function homePage({firebase, googleLogin}) {
    return (
        <React.Fragment>
          <MainNav/>
          <Row>
            <Col>
               <div className="">
                    <h3 class="">
                      The easiest way you can own a house!
                    </h3>
                    <div className="">
                      <GoogleLoginButton onClick={googleLogin}/>
                     <p>By logging in, you agree to the<Link to=""> terms of service </Link>of this website</p>
                   </div>
                </div>
            </Col>
          </Row>
           <div className="">
             <div className="">
             <div className="">
                <div className=""> 
                <p className="">Discover beautiful homes, buy anytime!</p>
                <p>Are you searching for a beautiful home to buy? You are at the right place.
                  Signup for free and start discovering a wide rage of amazing homes.
                </p>
                </div>
                <div className="">
                <House width="400" height="200"/>
                </div>
             </div>
             </div>
           </div>

           <div className="">
             <div className="">
             <div className="">
                <div className="">
                 <Setup width="400" height="200"/>
                </div>
                <div className="">
                   <p className="title">List your home for sale!</p>
                   <p>List your home for sale, and our job is to make sure it gets bought by someone.
                   </p> 
                </div>
             </div>
             </div>
           </div>

           <div className="">
             <div className="">
             <div className="">
                <div className=""> 
                   <p className="">Real estate and beyond!</p>
                   <p>We don't stop at helping you sell or discover beautiful homes,
                     We also help you acquire your own home through progressive savings and loans
                   </p>
                </div>
                <div className="">
                <Savings width="400" height="200"/>
                </div>
             </div>
             </div>
           </div>

           
           <div className="">
             <div className="">
               <div className="">
                  <p>
                  <h2 className="">
                    Ready to get started?
                  </h2>
                  <h3 className="">
                    Get in touch or create account
                  </h3>
                  </p>
                </div>
                <div className="">
                    <Link to={SIGNUP_PATH} className="">Create account</Link>
                    <Link to="" className="">Contact sales</Link>
                </div>
             </div>
           </div>

          <Footer/>
        </React.Fragment>
    )
}
