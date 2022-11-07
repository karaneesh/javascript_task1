let cargoHold=["oxygen tanks","space suits","parrot","instruction manual","meal packs","slinky","security blankets"];
console.log("a)")
console.log(cargoHold);
console.log("b)")
cargoHold[5]="space tether";
console.log(cargoHold);
console.log("c)")
cargoHold.pop();
console.log(cargoHold);
console.log("d)")
cargoHold.shift();
console.log(cargoHold);
cargoHold.unshift(1138);
cargoHold.push("20 meters");
console.log(cargoHold);
console.log("e)")
console.log(`The final array is ${cargoHold} with the length ${cargoHold.length}`);
