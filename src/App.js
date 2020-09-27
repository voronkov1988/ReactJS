import React from 'react'
import AutourList from './AutoursList'
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
            <SimilarBooks similars={Similar} />
            <BottomForm/>
            <Footer/>
            </>
        )
    }
}

export default App