import React from 'react';

const withLoader = EnhancedComponent => (
  function withLoader(props) {
    console.log('isLoading', props.isLoading)
    return (
      props.isLoading
        ? <div>Идет загрузка...</div>
        : <EnhancedComponent {...props} />
        
    );
  }
)
export default withLoader;