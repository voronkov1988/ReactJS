import React from 'react'

const API_KEY = 'key1XVt8IuC69FRVl'

class FetchAutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            autours: null
        }
    }

    componentDidMount(){
        this.fetchAutours();
    }

    fetchAutours(){
        fetch('https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/autour?maxRecords=3&view=All%20clients', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => this.setState({autours: result.records}))
    }

    render(){
        console.log(this.state.autours)
        return(
                <div>123</div>
            
        )
    }
}
export default FetchAutourList