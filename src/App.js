import React from 'react'
import AutourList from './AutoursList'
import Book from './Book'

class App extends React.Component{
    render(){
        console.log(this.props.book.autour);
        return (
            
            <>
            <Book {...this.props}>
                <AutourList autours={this.props.book.autour}/>
            </Book>
            </>
        )
    }
}

export default App