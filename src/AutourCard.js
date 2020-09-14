import React from 'react'

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

class AutourCard extends React.Component{
    render(){
        // console.log(this.props)
        const {name, email, age, avatar} = this.props;
        return(
                <div className='oneAutour'>
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