// Expose module as global variable
var singleton = function(){

    // Inner logic
    function sayHello(){
      document.getElementById('ellie').innerHTML = 'Hi Ellie from Revealing Pattern' ;
      return 'Hello from revealing';
    }
  
    // Expose API
    return {
      sayHello: sayHello
    }
}()