let colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
let btn = document.getElementById('btn')
let color = document.querySelector('.color')


btn.addEventListener('click',function(){
    let randomy = colors[getrandomcolor()]
    document.body.style.backgroundColor = randomy
    color.textContent =randomy
})




function getrandomcolor(){
    return Math.floor(Math.random()*colors.length)
}


// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   // console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

