import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

setInterval(() => {
    axios.get('https://jdesign.herokuapp.com/').then(() => console.log(new Date()));
}, 1000 * 60 * 5);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
