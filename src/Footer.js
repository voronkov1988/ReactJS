import React from 'react';

const styles = {
    'footer': {
        'widht': '100%',
        'height': '100px',
        'backgroundColor': 'black'
    },
    'footer-text': {
        'display': 'flex',
        'justifyContent': 'center',
        'paddingTop': '30px',
        'color': 'black',
        'fontSize': '2em',
        'textShadow': '1px 1px silver',
        'color': 'white'
    }
}

class Footer extends React.Component{
    render(){
        return(
            <div style={styles.footer} className="footer">
                <p style={styles["footer-text"]}>&copy; {new Date().getFullYear()} BookShop</p>
            </div>
        )
    }
}

export default Footer