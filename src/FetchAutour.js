import React from 'react'
import FetchBooks from './FetchBooks'

class FetchAutour extends React.Component{
    render(){
        const {name, email, avatar, age} = this.props.autour.fields
        console.log(this.props.autour.fields)
        return(
            <div>
                <img src={avatar} alt={name}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default FetchAutour