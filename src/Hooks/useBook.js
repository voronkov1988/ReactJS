import React, { useEffect, useState } from 'react'
const API_KEY = 'key1XVt8IuC69FRVl'

function FetchBooks(){
    return fetch('https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/Books?maxRecords=All&view=All%20projects', {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    })
    .then(item => item.json())
    
}

const useProduct = (idProduct) => {
    const [record, setRecord] = useState(null);

    useEffect(() => {
        setRecord(null);
        FetchBooks().then(record => {
            // console.log(record.records)
            setRecord(record.records.filter(book => book.id === idProduct))
        })
    }, [idProduct])
    return record;
}

export default useProduct