import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Locater from './Locater';
import GoogleMap from './GoogleMap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Locater />, document.getElementById('root'));

ReactDOM.render(<GoogleMap />, document.getElementById('root'));
registerServiceWorker();




