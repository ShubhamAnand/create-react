import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AddElement from './components/AddElement';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AddElement/>, document.getElementById('root'));
registerServiceWorker();
