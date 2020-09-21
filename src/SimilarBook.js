import React from 'react'

const SimilarBook = React.memo(
  (book, removeSimilar) => {
    return (
        <div style={styles.oneBook} className='oneBook'>
          <div style={styles.topBlock}>
            <img style={styles.img} src={book.book.img}/>
            <span className='close' style={styles.close} onClick={() => book.removeSimilar(book.book.id)}>X</span>
          </div>
          <div>{book.book.title}</div>
          <div>{book.book.autour}</div>
        </div>
    )
  }
)

const styles = {
  oneBook: {
    border: '1px solid black',
    boxShadow: '8px 8px 1px gray'
  },
  img: {
    maxWidth: '200px',
    margin: '20px 20px',
    padding: '20px'
  },
  close:{
    display:'block',
    width: '30px',
    height: '30px',
    border: '1px solid black',
    marginTop: '30px',
    fontSize: '1.5em',
    textAlign: 'center',
    fontWeight: 'bolder',
    borderRadius: '50%',
    cursor: 'pointer',
    marginRight: '10px'
  },
  topBlock: {
    display: 'flex',
    justifyContent: 'space-beetwen'
  }
}

export default SimilarBook