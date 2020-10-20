import React from 'react'
import styled from 'styled-components'
import Header from '../../Header'
import Footer from '../../Footer'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { uploadFile } from './FilestackServer'

const Schema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().positive().min(10).max(100000).required(),
    description: yup.string().required(),
    pages: yup.number().positive(),
    addAutour: yup.string().required()
})



const API_KEY = 'key1XVt8IuC69FRVl';

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/apphNtHVqcSyA4Oi5',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const sendBook = (data) => {
    console.log(data)
    return (
        httpClient.post('/Books', {
            records:[
                {
                    fields: data
                }
                
            ]
        })
    )
}


const AddBook = () => {
    const {errors, register, handleSubmit} = useForm({ resolver: yupResolver(Schema) });

    const history = useHistory();
    
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('fileUpload', data.imgLink[0])
        const uploadResult = await uploadFile(formData);
        return sendBook({
            ...data,
            imgLink: uploadResult.url,
            price: parseFloat(data.price)
        }).then((res) => {
            const productId = res.data.records[0].id;
            const redirectURI = `/product/${productId}`
            history.push(redirectURI)
        })
    }
    return(
        <>
        <Header/>
        <FormWrapp>
            <H2>Форма для добавления книги</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field defaultValue={'dfds'} errors={errors} style={style} name='title' placeholder='Название книги' register={register}></Field>
                <Field defaultValue={'dfds'} errors={errors} style={style} name='description' type='textarea' placeholder='Описание книги' register={register}/>
                <Field defaultValue={12} errors={errors} style={style} name='pages' placeholder='Количество страниц' register={register}/>
                <Field type='file' style={style} name='imgLink' register={register}/>
                <Field defaultValue={123} errors={errors} style={style} name='price' placeholder='Цена книги' register={register}/>
                <Field defaultValue={'dfds'} style={style} name='addAutour' placeholder='Введите автора' register={register}/>
                <Input>Add book</Input>
            </form>
        </FormWrapp>
        <Footer/>
        </>
    )
}

const Field = ({errors, register, type, className, ...inputProps}) => {
    const Component = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div>
            <Component type={type} ref={register} {...inputProps} />
            {errors && errors[inputProps.name] && <ErrorMessage>{errors[inputProps.name].message}</ErrorMessage>}
        </div>
    );
};




const style = {
    width: '70%',
    marginLeft:'15%',
    height:'50px',
    fontSize:'1.6em',
    fontWeight:'bolder',
    textAlign: 'center',
    marginTop: '10px',
    borderRadius:'20px'
}
const ErrorMessage = styled.p`
    text-align:center;
    color:red;
    font-weight: bold;
`;

const Input = styled.button`
    width: 30%;
    margin-left:35%;
    height:50px;
    cursor: pointer;
    background-color: green;
    font-size:1.6em;
    font-weight:bolder;
    text-align: center;
    margin-top: 10px;
    border-radius:20px;
    transition:.3s;
    :hover{
        background-color:red;
        transition:.3s;
    }
`;

const FormWrapp = styled.div`
    width:60%;
    margin-left: 20%;
    padding-bottom: 20px;
    height:auto;
    background-color: silver;
    border-radius: 20px;
    @media(max-width: 800px){
        width:100%;
        margin-left: 0px
    }
`;

const H2 = styled.h2`
    font-size:3em;
    color: red;
    font-weight:bolder;
    padding-top: 30px;
    text-shadow: 2px 2px black;
    text-align:center;
`;


export default AddBook