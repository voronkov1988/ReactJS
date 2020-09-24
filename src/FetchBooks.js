import React from 'react'
import axios from 'axios'
import Book from './Book'

const API_KEY = 'key1XVt8IuC69FRVl'

class FetchBooks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            record: null,
        }
    }

    componentDidMount(){
        this.fetchData('Books', 'projects')
    }

    fetchData(item, project){
        fetch(`https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/${item}?maxRecords=3&view=All%20${project}`,{
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(record => this.setState({record: record}))
    
    }

    render(){
        let {record} = this.state
        return (
            <div className='wrapp' style={styles.wrapp}>
                {
                    record ? <>{record.records.map(item=> <Book key={item.fields.id} book={item.fields}/>)}</> : <div>download</div>
                }
            </div>
        )
    }
}

const styles = {
    wrapp: {
        display: 'flex'
    }
}

export default FetchBooks