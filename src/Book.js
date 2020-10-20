import React from 'react'
import Modal  from './Modal'
import FetchAutourList from './FetchAutourList'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


class Book extends React.Component{
    getPopular(){
        const {subscribers} = this.props.book;
        return subscribers > 10 ? 'Очень популярна' : 'Набирает популярность'
    }
    render(){
        const {id, title, subscribers, description, pages, languages, progress, imgLink, minPrice, price} = this.props.book.fields
        return (
                <OneBook>
                    <Link to={`/product/${this.props.book.id}`}><Image src={imgLink} alt={title}/>
                    <BookTitle>{title}</BookTitle></Link>
                    <p>{description}</p>
                    <InfoBook>
                        <span>страниц - {pages}</span>
                        <span>язык - {languages}</span>
                        <span>прогресс - {progress}</span>
                    </InfoBook>
                    <CostBook>
                        <p>Минимальная цена - {minPrice}</p>
                        <p>Рекомендуемая цена - {price}</p>
                    </CostBook>
                    <FetchAutourList {...this.props.book} />
                    <div>Подписчиков {subscribers}({this.getPopular()})</div>
                    <Modal />
                </OneBook>
        )
    }
}
export default Book

const OneBook = styled.div`
    width: 90%;
    border: 2px solid black;
    margin: 10px 10px;
    box-shadow: 3px 3px gray;
    @media(max-width: 800px){
        width:100%;
    }
`;
const Image = styled.img`
    max-width:100%;
`;
const InfoBook = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.1em;
`;
const CostBook = styled.div`
    font-size: .9em;
    display: flex;
    justify-content: space-around;
`;
const BookTitle = styled.h2`
    text-align: center;
    color: red;
`;