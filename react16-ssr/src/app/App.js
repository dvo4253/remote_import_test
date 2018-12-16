import singleSpaReact from 'single-spa-react';
import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './provider.js';

const createApp = () => singleSpaReact({
	React,
	ReactDOM,
	rootComponent,
	domElementGetter: () => document.getElementById('app'),
});

export const bootstrap = [
	createApp.bootstrap,
];

export const mount = [
	createApp.mount,
];

export const unmount = [
	createApp.unmount,
];

export default createApp;
