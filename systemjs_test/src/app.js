// import System from '../public/assets/system.js';
import {registerApplication, start} from 'single-spa';

System.import('http://localhost:8000/app.2c1ed8e1744436005d7b.js').then(resp => {

    console.log("RESP: ", resp)
    registerApplication(
        // Name of our single-spa application
        'app',
        // Our loading function
        resp.default.default(),
        // Our activity function
        () => true
      );

    start();
})

console.log("Hello From app!");