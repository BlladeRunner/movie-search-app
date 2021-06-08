import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import App from "./App"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search House</h1>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
reportWebVitals();
