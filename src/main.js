import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import AutoursList from './AutoursList.json'
import UserContext from './UserContext'
import SimilarBooks from './SimilarBooks.json'


const userInfo = {
    email: 'test@mail.ru',
    firstName: 'Evgeniy',
    lastName: 'Voronkov',
    avatarUrl: 'https://f3.mylove.ru/J1NuDGy2QF.jpg'
}

const API_KEY = 'key1XVt8IuC69FRVl'

ReactDOM.render(
    <UserContext.Provider value={userInfo}>
        <App API_KEY={API_KEY} similar={SimilarBooks} book={AutoursList}/>
    </UserContext.Provider>
    ,
    document.getElementById('root')
)