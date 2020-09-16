import React from 'react';
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
class Header extends React.Component{
    render(){
        return (
            <>
            <div style={styles.header} className="header">
                <img style={styles.img} src="https://static.tumblr.com/986212364a0a3c98918ef50c506cf2c3/alfxvss/wbQohwp5b/tumblr_static_30857eon4bwgwkkooowogw8sc.jpg"/>
                <p style={styles.headerTitle} className="header-title">Book shop</p>
            </div>
            </>
        )
    }
}

export default Header;