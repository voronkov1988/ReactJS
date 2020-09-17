import React from 'react'

class BottomForm extends React.Component{

    getDataForm(e){
        e.preventDefault();
        console.log(e.target.message.value, e.target.email.value)
    }

    render(){
        return(
            <div style={styles.formWrapp} className='formWrapp'>
                <div className='imgBlock'>
                    <h3 style={styles.title}>Форма для связи с автором</h3>
                    <img style={styles.imgForm} src='https://sortimo.ru/assets/images/contact.jpg' alt='Связаться с автором' />
                </div>
                <div className='form'>
                    <form onSubmit={this.getDataForm}>
                        <textarea style={styles.topInput} className='message' name='message' placeholder='Задайте свой вопрос автору'></textarea>
                        <input style={styles.input} className='email' name='email' type='text' placeholder='введите email'></input>
                        <input style={styles.input} type='submit'></input>
                    </form>
                </div>
            </div>
        )
    }
}

const styles = {
    formWrapp: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px 20px',
        border: '1px solid black',
    },
    imgForm: {
        maxHeight: '300px'
    },
    input: {
        display: 'block',
        marginTop: '10px',
        width: '400px',
        height: '50px',
        fontSize: '2em',
        textAlign: 'center',
        borderRadius: '10px'
    },
    topInput: {
        marginTop: '80px',
        borderRadius: '10px',
        width: '400px',
        height: '150px'
    },
    title:{
        fontSize: '1.4em',
        textAlign: 'center'
    }
}

export default BottomForm