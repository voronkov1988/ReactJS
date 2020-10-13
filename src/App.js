import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BottomForm from './BottomForm'
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
            <SimilarBooks {...this.props} />
            <BottomForm/>
            <Footer/>
            </>
        )
    }
}

export default App