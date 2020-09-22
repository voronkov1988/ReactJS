import React from 'react'
// import AutourList from './AutoursList'
// import Book from './Book'
import Header from './Header'
import Footer from './Footer'
import BottomForm from './BottomForm'
import Similar from './SimilarBooks.json'
import SimilarBooks from './SimilarBooks'
import FetchBooks from './FetchBooks'
import FetchAutourList from './FetchAutourList'


class App extends React.Component{
    render(){
        return ( 
            <>
            <Header/>
            <FetchBooks>
                <FetchAutourList/>
            </FetchBooks>
            {/* <Book {...this.props}>
                <AutourList autours={this.props.book.autour}/>
            </Book> */}
            <SimilarBooks similars={Similar} />
            <BottomForm/>
            <Footer/>
            </>
        )
    }
}

export default App