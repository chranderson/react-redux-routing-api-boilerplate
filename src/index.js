import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'

const Root = () => <Router><App /></Router>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
