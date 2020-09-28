import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) {
    console.log(props)
    return (
      !props.isLoading
        ? <EnhancedComponent {...props} />
        : <div>Идет загрузка...</div>
        
    );
  }
)
export default withLoader;