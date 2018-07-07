import React from 'react'

class Order extends React.Component{

    render (){
        console.log(this.props)
        return(
            <div>
                <p>Hey order</p>
            </div>
        )
    }

}

export default Order