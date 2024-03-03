// localStorage.setItem("dog", "Ketty");

// let dogName = localStorage.getItem("dog");
// console.log(dogName);

// localStorage.removeItem("dog");

let user = { username: "aizatesenbekova", isActive: true };
localStorage.setItem("userinfo", JSON.stringify(user));
let userInfo = JSON.parse(localStorage.getItem("userinfo"));
console.log(userInfo);
