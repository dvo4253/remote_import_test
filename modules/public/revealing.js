// Expose module as global variable
var singleton = function(){

    // Inner logic
    function sayHello(){
      console.log('Hello from revealing');
    }
  
    // Expose API
    return {
      sayHello: sayHello
    }
}()