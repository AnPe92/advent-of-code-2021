let lines = `
199        
200      
208   
210    
200  
207  
240   
269    
260     
263`.trim().split("\n").map(Number);

let numOfIncreased = 0;

let arrOfDepths = [];
 
for(let i = 0; i<lines.length-2; i++){
	let sumOfThree = lines[i] + lines[i+1] + lines[i+2];
	arrOfDepths.push(sumOfThree);
}

for(let j = 1; j < arrOfDepths.length; j++){
		if(arrOfDepths[j] > arrOfDepths[j-1]){
		numOfIncreased++;
		}
}

console.log(numOfIncreased);
