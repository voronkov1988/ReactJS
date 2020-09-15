import React from 'react';
const styles = {
    'header':{
        'width': '100%',
        'height': '200px',
        'backgroundColor': 'black'
    },
    'headerTitle': {
        'fontSize': '2em',
        'color': 'white',
        'margin': '0',
        'display': 'flex',
        'justifyContent': 'center',
        'paddingTop': '90px'
    }
}
class Header extends React.Component{
    render(){
        return (
            <div style={styles.header} className="header">
                <p style={styles.headerTitle} className="header-title">Book shop</p>
            </div>
        )
    }
}

export default Header;