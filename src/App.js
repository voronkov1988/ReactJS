import React from 'react'
import Main from './pages/Main'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import BookPage from './pages/book/BookPage'
import AddBook from './pages/book/AddBook'


class App extends React.Component{
    render(){
        return ( 
            <Router>
                <Switch>
                    <Route component={Main} path='/' exact />
                    <Route component={AddBook} path='/product/add' exact />
                    <Route component={BookPage} path='/product/:bookId' exact/>
                </Switch>
            </Router>
        )
    }
}

export default App