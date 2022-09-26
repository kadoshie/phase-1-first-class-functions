const receivesAFunction = (callbackFunc) => {
  return callbackFunc();
}
const  returnsANamedFunction = () => {
  function AFunc() {
    // Your code here!!
  }
  return AFunc;
}
const  returnsAnAnonymousFunction = () => {
  return () => {};
}