import React from 'react'
import SimilarBook from './SimilarBook'

class SimilarBooks extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = { showBooks: this.props.similars }
        this.removeSimilar = this.removeSimilar.bind(this)
    }

    removeSimilar(id){
        let array = this.state.showBooks
        console.log(array)
        array.length > 4 ? (this.setState({showBooks: (array.filter(item => item.id != id))})) :  null;
        
    }

    render(){
        return (
            <>
                <h2 style={styles.title}>Похожие книги</h2>
                <div style={styles.wrap}>
                {
                    this.state.showBooks.slice(0,4).map(item => {
                        return <SimilarBook key={item.id} book={item} removeSimilar={this.removeSimilar}/>
                    })
                }
            </div>
            </>
        )
    }
}

const styles = {
    wrap: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px 20px'
    },
    title: {
        textAlign: 'center'
    }
}

export default SimilarBooks