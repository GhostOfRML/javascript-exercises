const removeFromArray = function( array, ...args ) {
/*Make a function that goes trough all the elements of an array ,and takes out a word or multiple
It doesnt need to be in the same array but it can still be   
*/   
  return array.filter(item => {
    return !args.includes(item);
  });
}  


// Do not edit below this line
module.exports = removeFromArray;
