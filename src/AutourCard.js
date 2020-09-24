import React from 'react'

class AutourCard extends React.Component{
    
    render(){
        const {name, email, age, avatar} = this.props;
        // console.log(this.props)
        return(
            <div style={styles.autourWrapp} className='oneAutour'>
                <img style={styles.image} src={avatar} alt={name}/>
                <div className='infoAutour'>
                    <h3>{name}</h3>
                    <span>{email}</span>
                    <span>{age}</span>
                </div>
            </div>
        )
    }
}
export default AutourCard


const styles = {
    'autourWrapp': {
        'display': 'flex',
        'heigth': 'auto',
        'width' : '100%',
        'border': '1px solid black'
    },
    'image': {
        'maxWidth': '30%',
    }
}
