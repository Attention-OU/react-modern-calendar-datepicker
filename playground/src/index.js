import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import { Calendar } from '../../lib/index';
import * as serviceWorker from './serviceWorker';

const App = () => {
  return <Calendar locale="ee" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
