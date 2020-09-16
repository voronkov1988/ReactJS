import React from 'react'
import AutourCard from './AutourCard'

const styles = {
    'wrap': {
        // 'display': 'flex',
        // 'justifyContent': 'space-around'
    },
    'more': {
        'margin': '10px 10px',
        'marginLeft': '35%'
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
    toogleState(){
        this.setState({showAllAutours : !this.state.showAllAutours})
    }
    showLimitCount(){
        const {showLimit, showAllAutours, allAutours} = this.state;
        return showAllAutours ? allAutours : showLimit;
    }
    showButtonText(){
        const {showAllAutours} = this.state;
        return showAllAutours ? 'показать 3 автора' : `Показать еще ${this.props.book.autour.length - 3}`;
    }

    render(){
        const {showLimit, showAllAutours, allAutours} = this.state;
        return(
            <>
            <div style={styles.wrap} className='autourWrapp'>
                {this.props.book.autour.slice(0, this.showLimitCount()).map(item => {
                    return(<AutourCard key={item.id} {...item}/>)
                })}
            </div>
            <button onClick={() =>this.toogleState()}  style={styles.more}>{this.showButtonText()}</button>
            </>
        )
    }
}
export default AutourList