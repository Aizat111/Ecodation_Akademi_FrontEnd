// INCLUDES

// const pets = ["dog", "cat", "bat"];
// console.log(pets.includes("cat"));

// let pet = "cat";
// console.log(pet.includes("at"));

// MAP
// pets.map((item) => console.log(item));

// const multiply3 = (item) => item * 3;
// const numberArr = [1, 2, 3];
// const newNumberArr = numberArr.map(multiply3);
// console.log(newNumberArr);

// FILTER

// let numbers = [1, 2, 5, 7, 9, 11];
// let newNumbers = numbers.filter((item) => item > 7);
// console.log(newNumbers);

const creatures = [
  { name: "SpongeBob", personality: "Funny" },
  { name: "Mater", personality: "Funny" },
  { name: "Gargamel", personality: "Antagonistic" },
  { name: "Voldemort", habitat: "Unkind" },
];

const funnyCreatures = creatures.filter((item) => item.personality == "Funny");
console.log(funnyCreatures);
