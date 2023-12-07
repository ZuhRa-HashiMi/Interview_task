import { Row, Col } from 'antd';
import React from 'react';
import WrappedComponent from './components/hocWrapped/WrappedComponent';
import withAdditionalProp from './hoc/withAdditionalProp';
import LazyImage from './components/Streaming/LazyImage';
import picOne from './Assets/images/1.jpg';
import picTwo from './Assets/images/2.jpg';
import Person1 from "./components/persons/Person_one";
import Person2 from './components/persons/Person_two';
import SearchCountries from './components/debounceSearch/form';

const EnhancedComponent = withAdditionalProp(WrappedComponent);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#e0e0e0',
  minHeight: '50vh', 
};

const App = () => {
  return (
    <>
    <h2 style={containerStyle}>First Task
     <SearchCountries /></h2>
      <div style={containerStyle}>
        <h2>Second Task</h2>
        <h1>Higher Order Component First Example
        </h1>
        <EnhancedComponent parentProp="I am from the parent component" />
        <div>
          <h1>Higher Order Component Second Example</h1>
          <Person1 />
          <Person2 />
        </div> </div>
      <div>
        <h2>Third Task</h2>
        <h1>Lazy Loaded Images</h1>
        <Row gutter={16}>
          <Col span={8}>
            <LazyImage src={picOne} alt="Image 1" style={{ height: '200px', objectFit: 'cover' }} />
          </Col>
          <Col span={8}>
            <LazyImage src={picTwo} alt="Image 2" style={{ height: '200px', objectFit: 'cover' }} />
          </Col>
          <Col span={8}>
            <LazyImage src={picOne} alt="Image 3" style={{ height: '200px', objectFit: 'cover' }} />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default App;
