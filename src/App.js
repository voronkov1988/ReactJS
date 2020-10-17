import React from 'react'
import Main from './pages/Main'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import BookPage from './pages/book/BookPage'


class App extends React.Component{
    render(){
        // console.log(this.props)
        return ( 
            <Router>
                {/* <Main/> */}
                <Switch>
                    <Route component={Main} path='/' exact />
                    <Route component={BookPage} path='/product/:bookId' exact/>
                </Switch>
            </Router>
        )
    }
}

export default App