import React from 'react'
import AutourList from './AutoursList'
import Book from './Book'
import Header from './Header'
import Footer from './Footer'
import BottomForm from './BottomForm'

class App extends React.Component{
    render(){
        return ( 
            <>
            <Header/>
            <Book {...this.props}>
                <AutourList autours={this.props.book.autour}/>
            </Book>
            <BottomForm/>
            <Footer/>
            </>
        )
    }
}

export default App