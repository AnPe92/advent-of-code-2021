let input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`.trim().split("\n");

const objectOfOrders = {};
let depth = 0;

input.forEach(string => {
   const [key, value] = string.split(" ");
	 if(objectOfOrders[key]){
   objectOfOrders[key] = objectOfOrders[key] += parseInt(value);
	 } else {
	 objectOfOrders[key] = parseInt(value);
	 }
});

depth = depth + objectOfOrders.down - objectOfOrders.up

let sum = objectOfOrders.forward * depth;

console.log(sum);
