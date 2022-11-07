let cargoHold=[1138,"space suits","parrot","instruction manual","meal packs","space tether","20 meters"];
console.log("a)")
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
console.log("b)")
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);
console.log("c)")
cargoHold.splice(2,0,'cat','fob','string cheese');
console.log(cargoHold);
