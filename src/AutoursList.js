import React from 'react'
import AutourCard from './AutourCard'

const styles = {
    'wrap': {
        'display': 'flex',
        'justifyContent': 'space-around'
    }
}

class AutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showLimit: 3,
            showAllAutours: false,
            allAutours: this.props.book.autour.length
        }
    }

    showLimit(){
        
    }

    render(){
        return(
            <div style={styles.wrap} className='autourWrapp'>
                {this.props.book.autour.map(item => {
                    return(<AutourCard key={item.id} {...item}/>)
                })}
            </div>
        )
    }
}
export default AutourList