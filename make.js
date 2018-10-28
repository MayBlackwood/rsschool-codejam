module.exports = function make(firstValue){ 
    let numbers = [firstValue]; 
    let result = 0; 
    function res(...args) { 
      if(typeof args[0] === 'function'){ 
        numbers.forEach(function(elem){ 
          return result = args[0](result, elem); 
        }); 
        return result; 
      } else {
        numbers.push(...args);
      };
      return res; 
    }; 
    return res; 
  };