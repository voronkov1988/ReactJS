import React from 'react'
import useBook from '../../Hooks/useBook'
import OnePage from './Book'

const product = (id) => {
    const currentBook = id.match.params.bookId;
    const product = useBook(currentBook)
    return (
        product ? 
        product.map(item => {
            return (<OnePage key={item.fields.id} {...item}/>)
            
        })
        : <div>download</div>
    )
}

export default product

