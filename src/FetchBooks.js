import React from 'react'
import Book from './Book'
import withData from './HOC/withData'
import withLoader from './HOC/HOCWithLoader'
import styled from 'styled-components'

// import './styles/bookStyles.css'

let BookWrap = styled.div`
    display: flex;
    @media(max-width: 800px){
        flex-direction: column;
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
                    <>{this.props.value.map(item=>
                            <Book isLoading={!this.state.isLoading} key={item.fields.id} book={item}/>
                        )}
                    </>
                }
            </BookWrap>
        )
    }
}


export default withData(withLoader(FetchBooks), 'Books', 'projects')