/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import App from './provider';

const render = (Component) => {
	ReactDOM.hydrate(
		<Component />,
		document.getElementById('app'),
	);
};

render(App);

/**
* This script provides hot module reloading in development mode.
*/
if (module.hot && process.env.NODE_ENV === 'development') {
	module.hot.accept('./provider', () => {
		const reactApp = require('./provider').default;
		render(reactApp);
	});
}
