let lines = /* `input here ` */.trim().split("\n");

let numOfIncreased = 0;
 
for(let i=1; i < lines.length; i++){
	if(parseInt(lines[i]) > parseInt(lines[i-1])){
	numOfIncreased = numOfIncreased + 1;
	}
}

console.log(numOfIncreased);
