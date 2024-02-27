let second = 0;
// function my_func() {
//   second += 5;
//   document.getElementById("header1").innerHTML = `${second} saniye geçti`;
// }

let id = setInterval(function () {
  second++;
  document.getElementById("header1").innerHTML = `${second} saniye geçti`;
  if (second == 3) {
    clearInterval(id);
  }
}, 1000);

let domBody = document.querySelector("body");

setTimeout(function () {
  domBody.innerHTML =
    domBody.innerHTML +
    `\n  <img src ='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' />`;
}, 3000);
