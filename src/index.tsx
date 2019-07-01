import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/index';

import App from './App';

const store = configureStore();

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
