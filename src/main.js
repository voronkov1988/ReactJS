import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import AutoursList from './AutoursList.json'

ReactDOM.render(
    <App book={AutoursList}/>,
    document.getElementById('root')
)