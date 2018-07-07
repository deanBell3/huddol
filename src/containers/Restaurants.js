import React from 'react'
import axios from 'axios'
import Restaurant from '../components/Restaurant'
import {Link } from 'react-router-dom'

class Restaurants extends React.Component{
    state={
        restaurants:[],
        quantity: 0,
        price:0,
    }
    componentDidMount(){
         axios.get('https://huddolapi-next.herokuapp.com/v1/challenge').then(
             res=> {
                 
                this.setState({restaurants: res.data})
                console.log(res.data)}
         )
    }
    addItemHandler=(newprice, quantity)=>{
        
        return newprice * quantity
    }
    render(){
        console.log(this.state.restaurants)
        const style={
            boxShadow:'1px 1px 1px 1px ',
            margin: '2% 5%'
        }
        const restaurant= this.state.restaurants.map(resto=>{
            return(
                
                <div className='column is-one-third' style={style}>
                <Link to={'/restaurant/'+resto.id+'/order'} className='has-text-black'>
                <Restaurant 
                quantity= {this.state.quantity}
                key={resto.id}
                name={resto.name}
                menu={resto.menu}
                itemAdded={this.addItemHandler}
                />
                </Link>
                </div>
                
            )
        })
        
        return(
            <div className='columns is-multiline'>
              {restaurant}
            </div>
        )

    }


}

export default Restaurants;