import React from 'react'
import {Link} from 'react-router-dom'

const navbar =()=>{
    const style={
        margin:'2% 2%'
    }
    return(
    <div >
        <nav className='navbar is-warning '>
        <div className='navbar-brand'>
        <p className='navbar-item'><Link to='/' className='has-text-danger is-size-3 '>FoodOrder</Link></p>
        </div>
        <div className='navbar-menu'>
        <div className='navbar-end'>
        <p  style={style}className='navbar-item'><Link to='/my-orders' className='has-text-danger '>My Orders</Link></p>
        </div>
        </div>
        </nav>
        
    </div>);
};

export default navbar;