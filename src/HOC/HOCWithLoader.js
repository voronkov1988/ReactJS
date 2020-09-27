import React from 'react'

const HOCWithLoader = (Component) =>{
    return (props) => {
        props.isLoading ? <div>Loading</div> : <Component {...props}/>
    }
}

export default HOCWithLoader