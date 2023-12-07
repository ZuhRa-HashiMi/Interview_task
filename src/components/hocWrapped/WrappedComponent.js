// components/WrappedComponent.js
import React from 'react';

const WrappedComponent = (props) => {
  return (
    <div>
      <p>This is the wrapped component.</p>
      <p>Prop from parent: {props.parentProp}</p>
      <p>Additional prop from HOC: {props.hocProp}</p>
    </div>
  );
};

export default WrappedComponent;
