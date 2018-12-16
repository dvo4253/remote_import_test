// src/index.js
// import registerServiceWorker from './registerServiceWorker';
import { registerApplication, start } from 'single-spa';

registerApplication(
	// Name of our single-spa application
	'app',
	// Our loading function - we will build this in Step Four
	() => import('./src/app/App'),
	// Our activity function
	() => true,
);

start();
// registerServiceWorker();
