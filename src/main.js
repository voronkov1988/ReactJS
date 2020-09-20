import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import AutoursList from './AutoursList.json'
import userContext from './userContext'
console.log(userContext)

const userInfo = {
    email: 'test@mail.ru',
    firstName: 'Evgeniy',
    lastName: 'Voronkov',
    avatarUrl: 'https://f3.mylove.ru/J1NuDGy2QF.jpg'
}

ReactDOM.render(
    <userContext.Provider value={userInfo}>
        <App book={AutoursList}/>
    </userContext.Provider>,
    document.getElementById('root')
 
    
)