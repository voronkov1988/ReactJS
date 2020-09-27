import React from 'react'
import Loader from './HOCWithLoader'

const API_KEY = 'key1XVt8IuC69FRVl'
const useBooks = (Component,table,item) => class useBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           fetchItems: null,
           isLoading: true
        }
    }

    componentDidMount(){
       return this.fetchAutours();
    }

    fetchAutours(){
        return fetch(`https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/${table}?maxRecords=All&view=All%20${item}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => this.setState({autours: result.records, isLoading: false}))
    }

    componentDidUpdate(){
        if(!this.state.autours){
            this.fetchAutours(this.props.count)
        }
    }

    render(){
        const {autours} = this.state;
        return(
            <>
            {
                this.state.autours
                ? <Component {...this.state.autours}/> 
                : <div>loading</div>
            }
            
            </>
        )
    }

}

export default useBooks