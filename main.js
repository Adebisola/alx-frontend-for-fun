/*const Array = [];

for (let i = 0; i <= 10; i++) {
  Array.push(i);
}
console.log(Array);



const arr = [-2,6,-7,8,10,12,14,18,-1,20,90,-8];
const newArr = [];
    for (let i=0; i< arr.length; i++){
      let  num = arr[i];
      if (num > 0){
        newArr.push(num);
        console.log(newArr);
    }
    
    }*/
    

const testArray = [];
for( let c = 0; (c >= 0 && c <= 10); c+=2) { //for (let c = 0; c < 10; c += 2)
  testArray.push(c);
}
console.log(testArray);


const sumArr= [4,6,8,10];
let total = 0;
  
for (let i=0;i<sumArr.length;i++){
  
   let num = sumArr[i];
    total = total += num;
    console.log(total);
}