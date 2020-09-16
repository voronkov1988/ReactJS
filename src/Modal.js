import React from 'react'
import ReactDom from 'react-dom'

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = { isOpen : false }
    }

    toggle(){
        this.setState({isOpen : !this.state.isOpen});
        console.log(1)
    }

    render(){
        return(
            <>
            <button onClick={()=>this.toggle()}>Посмотреть информацию</button>
            {
                this.state.isOpen && ReactDom.createPortal(
                    <div style={styles.fullModal}>
                        <div>
                            <h2 style={styles.text}>Для того чтобы получить скидку автограф, сделайте пожертвование</h2>
                            <form style={styles.modalForm}>
                                <input type="text"></input>
                                <input type="submit"></input>
                            </form>,
                        </div>
                        <button onClick={()=>this.toggle()} style={styles.button}>Закрыть специальное предложение</button>
                    </div>,
                    document.getElementById('modal-root')
                )
            }
            </>
        )
    }
}

export default Modal

const styles = {
    fullModal: {
        height: '1000vh',
        width: '100%',
        backgroundColor: 'black',
        position: 'fixed',
        top: 0,
        left: 0,
        opacity: .9
    },
    modalForm: {
        display: 'flex',
        color: 'white',
        marginTop: '3%',
        // alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'white',
        fontSize: '3em',
        textAlign: 'center',
        marginTop: '8%'
    },
    button: {
        marginLeft: '42.5%'
    }
}

