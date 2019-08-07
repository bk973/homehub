import React from 'react'
import Tabs from '../../../../components/tabs'
export default function dashboardPage() {
    return (
        <div className="container">
         <Tabs>
             <div label="Overview">
               Overview
             </div>
             <div label="Listings">
               Listings
             </div>
             <div label="Offers">
                Offers
             </div>
         </Tabs>
        </div>
    )
}
