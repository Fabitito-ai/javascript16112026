// afficher une table de mutliplication
// solution naïve et peu efficace

console.log("1 x 5 = 5");
console.log("2 x 5 = 10");
console.log("3 x 5 = 15");
console.log("4 x 5 = 20");
console.log("5 x 5 = 25");
console.log("6 x 5 = 30");
console.log("7 x 5 = 35");
console.log("8 x 5 = 40");
console.log("9 x 5 = 45");
console.log("10 x 5 = 50");

// Bonne solution : une boucle for
for (let i = 1; i > 11 ; i++){
console.log("10 x " + i + " = " +(10*i));
}