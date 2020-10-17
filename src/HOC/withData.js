import React from 'react'
import Loader from './HOCWithLoader'

const API_KEY = 'key1XVt8IuC69FRVl'
const withData = (Component,table,item) => class useBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           value: null,
           isLoading: true
        }
    }

    componentDidMount(){
       return this.fetchData();
    }

    fetchData(){
        return fetch(`https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/${table}?maxRecords=All&view=All%20${item}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => 
            this.setState({value: result.records, isLoading: false})
         )
    }

    componentDidUpdate(){
        if(!this.state.value){
            this.fetchData()
        }
    }

    render(){
        const {value} = this.state;
        return(
            <Component value={value} isLoading={this.state.isLoading} /> 
        )
    }

}

export default withData