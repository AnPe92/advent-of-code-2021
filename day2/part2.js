let input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`.trim().split("\n");

const objectOfOrders = {};
let depth = 0;
let aim = 0;
let horizontal = 0;


input.forEach(string => {
   const [key, value] = string.split(" ");	
	 switch(key){
	 case 'forward':
	 	horizontal += parseInt(value);
		depth = depth + aim * parseInt(value);
		break;
	case 'up':
		aim = aim - parseInt(value);		
		break;
	case 'down':
		aim = aim + parseInt(value);
		break;
	 }
});

console.log(horizontal * depth);
