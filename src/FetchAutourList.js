import React from 'react'
import AutourCard from './AutourCard'
import withData from './HOC/withData'
import withLoader from './HOC/HOCWithLoader'

class FetchAutourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            autours: null,
            showAllAutours: false,
            isLoading: true
        }
    }
    showLimit(){
        const {autours, showAllAutours} = this.state;
        return showAllAutours ? this.state.length : 3
    }

    showToogle(){
        this.setState({showAllAutours: !this.state.showAllAutours})
    }

    render(){
        const autourList = this.props.value.slice(0,this.showLimit())
        return(
            <div>
            <div style={styles.wrap} className='autourWrapp'>
                {
                   autourList.map(item => {
                        return (
                            <AutourCard isLoading={!this.state.isLoading} key={item.fields.id} {...item.fields}/>
                        )
                    })
                }
            </div>
            <button onClick={()=>this.showToogle()} style={styles.more}>Показать всех авторов</button>
            </div>
        )
    }
}

const styles = {
    'more': {
        'margin': '10px 10px',
        'marginLeft': '35%'
    }
}

export default withData(withLoader(FetchAutourList), 'autour', 'clients')