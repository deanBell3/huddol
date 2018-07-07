import React from 'react'
import {Route} from 'react-router-dom'
import Restaurants from './Restaurants';
import Order from './Order';
import Navbar from '../components/Navbar'
import OrderSummary from './OrderSummary'

class Layout extends React.Component{

render(){
    return(
        <div>
            <Navbar/>
            <Route path='/' exact component={Restaurants}/>
            <Route path='/restaurant/:id/order' exact component={Order}/>
            <Route path='/My-orders' exact component={OrderSummary}/>
        </div>
    )
}



}
export default Layout