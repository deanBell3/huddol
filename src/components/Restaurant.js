import React from 'react'

const restaurant=(props)=>{
    const pStyle={
        marginBottom: '2.5%',
    }
    const style={
        marginLeft: '2%',
        width: '37px',
        height:'37px',
        textAlign:'center'
    }
    const menuStyle={
        marginBottom:'5%'
    }
    const menu= props.menu.map(item=>{
        return (
            <div>
                <p style={pStyle}>
                <input type='text' value={item.name} style={{height:'37px',textAlign:'center'}} /> 
                <span ><input style={style} type='text' value={item.price}$/></span>
                <input className='button is-danger ' value='add' style={{marginLeft:'2%', width:'20%'}}/>
                <span style={{marginLeft:'2%'}}><strong>Qty</strong><input style={style} type='text' value={props.quantity}$/></span>
                </p>
                
            </div>
        )
    })
    return(
        <div>
            <p className='is-size-3'> Welcome to <strong>{props.name}</strong></p>
            <hr/>
            <p style={menuStyle}>Menu</p>
            {menu}
            
        </div>
    )
}

export default restaurant;