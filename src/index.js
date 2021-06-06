import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  render() {
    return (
      <h1>Hello world updated!</h1>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
reportWebVitals();
