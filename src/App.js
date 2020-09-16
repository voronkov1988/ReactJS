import React from 'react'
import AutourList from './AutoursList'
import Book from './Book'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component{
    render(){
        console.log(this.props.book.autour);
        return ( 
            <>
            <Header/>
            <Book {...this.props}>
                <AutourList autours={this.props.book.autour}/>
            </Book>
            <Footer/>
            </>
        )
    }
}

export default App