import React from 'react'
import AutourCard from './AutourCard'

const API_KEY = 'key1XVt8IuC69FRVl'

class FetchAutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           autours: null,
           showAllAutours: false
        }
    }

    componentDidMount(){
       return this.fetchAutours('all');
    }

    fetchAutours(count=3){
        fetch(`https://api.airtable.com/v0/apphNtHVqcSyA4Oi5/autour?maxRecords=${count}&view=All%20clients`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        })
        .then(res => res.json())
        .then(result => this.setState({autours: result.records}))
    }

    showLimit(){
        const {autours, showAllAutours} = this.state;
        return showAllAutours ? this.state.autours.length : 3
    }

    showToogle(){
        this.setState({showAllAutours: !this.state.showAllAutours})
    }

    render(){
        return(
            <>
            <div style={styles.wrap} className='autourWrapp'>
                {
                   this.state.autours ? this.state.autours.slice(0,this.showLimit()).map(item => {
                        return(<AutourCard key={item.id} {...item}/>)
                    }) : <div>download</div>
                }
            </div>
            <button onClick={()=>this.showToogle()} style={styles.more}>Показать всех авторов</button>
            </>
        )
    }
}

const styles = {
    'more': {
        'margin': '10px 10px',
        'marginLeft': '35%'
    }
}

export default FetchAutourList