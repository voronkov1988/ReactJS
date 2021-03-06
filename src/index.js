import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import UserContext from './UserContext'
import SimilarBooks from './SimilarBooks.json'

const userInfo = {
    email: 'test@mail.ru',
    firstName: 'Evgeniy',
    lastName: 'Voronkov',
    avatarUrl: 'https://f3.mylove.ru/J1NuDGy2QF.jpg'
}

ReactDOM.render(
    <UserContext.Provider value={userInfo}>
        <App />
    </UserContext.Provider>
    ,
    document.getElementById('root')
)