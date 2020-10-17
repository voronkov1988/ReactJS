import React from 'react'
import AutourCard from './AutourCard'
import styled from 'styled-components'
console.log(styled)

const AutourButton = styled.button`
    margin: 10px 10px;
    color: red;
`;


class AutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            autour: null,
            showLimit: 3,
            showAllAutours: false,
            allAutours: this.props.book.autour.length
        }
    }

    componentDidMount(){
        this.fetchAutours();
    }

    fetchAutours(){
        fetch('https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/autour?maxRecords=3&view=All%20clients', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => this.setState({autours: result.records}))
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
            <AutourButton onClick={() =>this.toogleState()}>{this.showButtonText()}</AutourButton>
            </>
        )
    }
}
export default AutourList