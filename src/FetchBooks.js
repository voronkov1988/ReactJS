import React from 'react'
import Book from './Book'
import withData from './HOC/withData'
import withLoader from './HOC/HOCWithLoader'
import styled from 'styled-components'

// import './styles/bookStyles.css'

let BookWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    @media(max-width: 800px){
        grid-template-rows: 1fr;
        grid-auto-columns: 1fr;
        grid-auto-flow: column;
    }
`;


class FetchBooks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetchItems: null,
        }
    }

    render(){
        return (
            <BookWrap>
                {
                    this.props.value.map(item=>
                            <Book isLoading={!this.state.isLoading} key={item.fields.id} book={item}/>
                    )
                    
                }
            </BookWrap>
        )
    }
}


export default withData(withLoader(FetchBooks), 'Books', 'projects')