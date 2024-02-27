// console.log(document.baseURI);

// document.getElementById("header1").innerHTML = "Dom ile veri değiştirildi";
// console.log(document.getElementById("header1").innerHTML);

// document.getElementById("header1").title = "Title değeri";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = " DOM üzerinden eklenmiş bir öge";
// ulDOM.append(liDOM);
ulDOM.prepend(liDOM);
