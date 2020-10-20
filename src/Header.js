import React from 'react';
import UserInfo from './UserInfo'
import AddBook from './pages/book/AddBook'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


const Header = ()=>{
    return (
        <>
        <div style={styles.header} className="header">
            <Link to='/'><img style={styles.img} src="https://static.tumblr.com/986212364a0a3c98918ef50c506cf2c3/alfxvss/wbQohwp5b/tumblr_static_30857eon4bwgwkkooowogw8sc.jpg"/></Link>
            <p style={styles.headerTitle} className="header-title">Book shop</p>
            <Link to='/product/add'><Button><ButtonSpan>+</ButtonSpan><ButtonP>Добавить книгу</ButtonP></Button></Link>
            <UserInfo/>
        </div>
        </>
    )
}

const ButtonP = styled.p`
    font-weight: bold;
    text-shadow:1px 1px red;
`;

const ButtonSpan = styled.span`
    font-size:5em;
    font-weight:bolder;
    color: gray;
    text-shadow:3px 3px black;
`;

const Button = styled.button`
    height: 150px;
    width:150px;
    cursor: pointer;
    background-color: yellow;
    margin-top: 26px;
`;

const styles = {
    'header':{
        'display': 'flex',
        'width': '100%',
        'height': '200px',
        'backgroundColor': 'black'
    },
    'headerTitle': {
        'fontSize': '2em',
        'flexGrow': '2',
        'color': 'white',
        'margin': '0',
        'display': 'flex',
        'justifyContent': 'center',
        'paddingTop': '90px'
    },
    'img': {
        'maxHeight': '200px'
    }
}

export default Header;