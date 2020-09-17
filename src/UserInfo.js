import React from 'react'
import userContext from './userContext'


class UserInfo extends React.Component{
    render(){
      return(
          <userContext.Consumer>
              {
                  ({email, avatarUrl, firstName, lastName}) => {
                    return (
                        <div style={styles.wrapp}>
                            <img style={styles.img} src={avatarUrl}/>
                            <span style={styles.name}>{firstName} {lastName}</span>
                            <span style={styles.mail}>{email}</span>
                        </div>
                    )
                  }
              }
          </userContext.Consumer>
      )
    }
}

const styles = {
    wrapp: {
        height: '150px',
        width: '150px',
        margin: '25px 25px 25px 25px',
        backgroundColor: 'white'
    },
    img : {
        maxHeight: '100px',
        borderRadius: '20px',
        marginLeft: '40px'
    },
    name: {
        marginLeft: '15px'
    },
    mail: {
        display: 'block',
        margin: '0px 0px 0px 40px'
    }
    
}

export default UserInfo