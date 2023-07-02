let json1 = '{"name":"divya","age":5}';

let json2 = '{"age":5,"name":"divya"}';


function compareJSON(json1, json2) {
 
  const obj1 = JSON.parse(json1);
  const obj2 = JSON.parse(json2);
  
  
  if(Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  }
  
  for(let key in obj1) {
    if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  for(let key in obj2) {
    if(!obj1.hasOwnProperty(key) || obj2[key] !== obj1[key]) {
      return false;
    }
  }
  
  return true;
  
}

let result = compareJSON(json1, json2);
console.log(result);
