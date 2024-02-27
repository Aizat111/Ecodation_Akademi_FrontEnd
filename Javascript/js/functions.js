// function sayHi() {
//   alert("Merhaba");
// }

// sayHi();

// function sum(num1, num2) {
//   //   console.log(num1 + num2);
//   //   print(num1 + num2);
//   return num1 + num2;
// }

// function print(word) {
//   alert(word);
// }

// let res = sum(5, 9);
// console.log(res);

let counter = 0;
function onClickButton(el) {
  //   alert("Buton tıklandı!");
  //   document.getElementById("header1").innerHTML = "Butona Tıklandı";
  //   el.style.cssText = "background-color: red; font-size:20px";
  counter++;
  el.innerHTML = `Butona ${counter} kez tıklandı`;
}

function onInput(el) {
  if (el.value == "Merhabaa") alert("Sana da Merhaba");
}
