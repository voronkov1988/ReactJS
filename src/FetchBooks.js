import React from 'react'
import Book from './Book'
import withData from './HOC/withData'
import withLoader from './HOC/HOCWithLoader'



class FetchBooks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetchItems: null,
        }
    }

    render(){
        return (
            <div className='wrapp' style={styles.wrapp}>
                {
                    <>{this.props.value.map(item=>
                         <Book isLoading={!this.state.isLoading} key={item.fields.id} book={item.fields}/>
                        )}
                    </>
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

export default withData(withLoader(FetchBooks), 'Books', 'projects')