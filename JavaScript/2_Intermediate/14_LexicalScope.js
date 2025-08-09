//* Lexical Scope -  A variable declared outside a function is accessible inside another function due to lexical scoping, but the reverse is not true.
//*                  This type of scope is founded in nested functions, where the inner function has access to the variables of its outer function.

function outerFunc(){
  let x = 5;
  let y = 6;
  function innerFunc(){ //! Function scope
      let a = 10;
      console.log(x); //todo - Due to lexical scoping, innerFunc can access x from outerFunc
      console.log(y);
  }
  //! console.log(a);// Error: a is not defined, Due to function scope, a is not accessible outside innerFunc.
    innerFunc();
}
//? innerFunc(); // Error: innerFunc is not defined, So we call it inside outerFunc because it is defined there.
outerFunc();