import React from 'react'
import Modal  from './Modal'
import FetchAutourList from './FetchAutourList'
import Loader from './HOC/HOCWithLoader'


class Book extends React.Component{
    getPopular(){
        const {subscribers} = this.props.book;
        return subscribers > 10 ? 'Очень популярна' : 'Набирает популярность'
    }
    render(){
        const {title, subscribers, description, pages, languages, progress, imgLink, minPrice, price} = this.props.book
        return (
                <div className='oneBook' style={styles.oneBook}>
                    <img style={styles.image} className='image' src={imgLink} alt={title}/>
                    <h2 style={styles.text} className='text'>{title}</h2>
                    <p>{description}</p>
                    <div style={styles.infoBook} className='infoBook'>
                        <span>страниц - {pages}</span>
                        <span>язык - {languages}</span>
                        <span>прогресс - {progress}</span>
                    </div>
                    <div style={styles.cost} className="costBook">
                        <p>Минимальная цена - {minPrice}</p>
                        <p>Рекомендуемая цена - {price}</p>
                    </div>
                    <FetchAutourList {...this.props.book} />
                    <div className='subscribers'>Подписчиков {subscribers}({this.getPopular()})</div>
                    <Modal />
                </div>
        )
    }
}
export default Book

const styles = {
    'bookWrapp': {
        display: 'flex',
        'width': '100%',
        'heigth': '400px',
        'border': '1px solid black',
    },
    'oneBook': {
        'maxWidth': '25%',
        'heigth': '350px',
        'border': '2px solid black',
        'margin': '10px 10px',
        'boxShadow': '3px 3px gray'
    },
    'image': {
        'maxWidth': '100%'
    },
    'infoBook': {
        'display': 'flex',
        'justifyContent': 'space-around',
        'fontSize': '1.1em'
    },
    'text': {
        'textAlign': 'center',
        'color': 'red'
    },
    'cost': {
        'fontSize': '.9em',
        'display': 'flex',
        'justifyContent': 'space-around'
    }
}