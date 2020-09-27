import React from 'react'
const API_KEY = 'key1XVt8IuC69FRVl'
const useBooks = (Component,table,item) => class useBooks extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           autours: null,
        }
    }

    componentDidMount(){
       return this.fetchAutours('all');
    }

    fetchAutours(){
        return fetch(`https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/${table}?maxRecords=All&view=All%20${item}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => this.setState({autours: result.records}))
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