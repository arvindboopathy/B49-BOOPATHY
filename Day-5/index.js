const persons ={
    name:"boopathy",
    age : 28,
    sex : "male"
};
for(let key in persons){
console.log(key + ":" ,persons[key]);
}
let colours =["red","blue","skyblue"];
 for(let colour of colours){
     console.log("colour:"+colour);
 }
 let colours =["red","blue","skyblue"];
 colours.forEach(function1);
 function function1(currentValue,index){
     console.log("indexValue:"+index + currentValue);
 }
 