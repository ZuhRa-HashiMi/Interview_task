import React from 'react';

const withAdditionalProp = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props} 
          hocProp="I am from HOC!"
        />
      );
    }
  };
};

export default withAdditionalProp;
