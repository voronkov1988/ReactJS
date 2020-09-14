import React from 'react'

const styles = {
    'button': {
        'display': 'flex',
        'justifyContent': 'center',
        'padding': '10px 10px'
    }
}

class Description extends React.Component{
    readyDescription(e){
        console.log(e)
        alert('Вы подписались')
    }

    render(){
        return(
            <div style ={styles.button} className="description">
                <button>Подписаться</button>
            </div>
        )
    }
}

export default Description;