import React from 'react'
import styled from 'styled-components'

class BottomForm extends React.Component{
    getDataForm(e){
        e.preventDefault();
        console.log(e.target.message.value, e.target.email.value)
    }

    render(){
        return(
            <FromWrapp>
                <ImgBlock>
                    <FormTitle>Форма для связи с автором</FormTitle>
                    <Image src='https://sortimo.ru/assets/images/contact.jpg' alt='Связаться с автором' />
                </ImgBlock>
                <div className='form'>
                    <form onSubmit={this.getDataForm}>
                        <TextArea className='message' name='message' placeholder='Задайте свой вопрос автору'></TextArea>
                        <Input className='email' name='email' type='text' placeholder='введите email'></Input>
                        <Input type='submit'></Input>
                    </form>
                </div>
            </FromWrapp>
        )
    }
}


export default BottomForm

const FromWrapp = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px 20px;
    border: 1px solid black;
`;
const ImgBlock = styled.div`
    max-height: 300px;
`;
const Image = styled.img`
    max-height:300px;
`;
const Input = styled.input`
    display: block;
    margin-top: 10px;
    width: 400px;
    height: 50px;
    font-size: 2em;
    text-align: center;
    border-radius: 10px;
`;
const TextArea = styled.textarea`
    margin-top: 80px;
    border-radius: 10px;
    width: 400px;
    height: 150px;
`;

const FormTitle = styled.h3`
    text-align:center;
    font-size: 1.2em;
`;