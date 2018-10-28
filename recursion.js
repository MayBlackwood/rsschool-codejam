module.exports = function recursion(obj) { 
  result = []; 
  function makeResult(obj, nesting){ 
    for(let key in obj){ 
      if(typeof obj[key] === 'object'){ 
        makeResult(obj[key], nesting + 1); 
      } else { 
        if(result[nesting]){ 
          result[nesting].push(obj[key]); 
        } else {
          result[nesting] = [obj[key]]; 
        };
      }; 
    }; 
  };
  makeResult(obj, 0); 
  return result; 
};
