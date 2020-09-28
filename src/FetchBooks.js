import React from 'react'
import Book from './Book'
import useBooks from './HOC/withAutour'
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
                    <>{Object.values(this.props).map(item=>
                         <Book isLoading={false} key={item.fields.id} book={item.fields}/>
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

export default useBooks(withLoader(FetchBooks), 'Books', 'projects')