// hoc/withAdditionalProp.js
import React from 'react';

const withAdditionalProp = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}  // Pass through existing props
          hocProp="I am from HOC!"  // Add an additional prop
        />
      );
    }
  };
};

export default withAdditionalProp;
