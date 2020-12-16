import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
import reportWebVitals from './reportWebVitals';

//Custom Components
import GifsExpertApp from './components/GifsExpertApp';

ReactDOM.render(
    <GifsExpertApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
