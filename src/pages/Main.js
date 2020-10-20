import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import BottomForm from '../BottomForm'
import SimilarBooks from '../SimilarBooks'
import FetchBooks from '../FetchBooks'
import FetchAutourList from '../FetchAutourList'
import SimilarBook from '../SimilarBooks.json'



class Main extends React.Component{
    render(){
        return ( 
            <>
            <Header/>
            <FetchBooks>
                <FetchAutourList/>
            </FetchBooks>
            <SimilarBooks similar={SimilarBook} />
            <BottomForm/>
            <Footer/>
            </>
        )
    }
}

export default Main