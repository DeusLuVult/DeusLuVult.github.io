////1
// let btn = document.querySelector(".sbm");
// btn.addEventListener('click', function(event){
//     event.preventDefault();
//     alert('ти натиснув на кнопку')
// });
// //2
// let btn = document.querySelector(".toogle"),
// img = document.querySelector(".shavuha");
// console.log(btn);
// btn.addEventListener('click', function(){
//     if (img.classList.contains("hide")) {
//         img.classList.remove("hide");
//     } else {
//         img.classList.add("hide");
//     }
// }); 
////3
// let input = document.querySelector(".phone");
// input.addEventListener("focus" , function(){
//     console.log(input.value);
// });
////4
let input = document.querySelector(".phone"),
html = document.querySelector("html")
html.addEventListener("click", function(){
    console.log(input.value);
});