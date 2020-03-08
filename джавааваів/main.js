// for( let i=0; i<11; i++) {
//     console.log(i);
// }

// for( let i=0; i<11; i++) {
//     if (i%2==0){
//         console.log("Число парне");
//     }else {
//         console.log("Число не парне");
//     }
// }

//  let num= 20;
// while (num < 29) { 
//   console.log( num);
//   num++;
// }


// let result=0;
// let arr=[5,3,6,2,4];
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
//     result=result+arr[i];
// }
// console.log(result)
  
let num=0;
let arr=[-3,2,7,8,-11,2,5,2];
for (let i=0; i<arr.length; i++){
    if (arr[i]>0){
        num+=arr[i];
        
    }
}console.log(num);
