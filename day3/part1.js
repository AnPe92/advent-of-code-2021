//Funkar men är inte snyggt!

const input =`
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`.trim().split("\n");
let row = "";
let gamma = "";
let epsilon = "";
let currNum = 0;

getRow(currNum);

function getRow(index){
		for ( let i = 0; i < input.length; i++){
			if(input[i][index] === "1") { 
			row = row + "1" 
			}else {
			row = row + "0";
			}
		}		
		rowChecker(row);		
}

function rowChecker (currRow) {
let ones = 0;
let zeros = 0;
	for(let j = 0; j < currRow.length; j++){
		currRow[j] == "1" ? ones++ : zeros++;
	}
	row = "";
	ones > zeros ? gamma += "1" : gamma += "0";
	ones = 0;
	zeros = 0;	
	
	row = "";
	currNum++;
if(currNum < input[0].length){		
		row = "";
		getRow(currNum);
	}else {
		row = "";
	for (let k = 0; k < gamma.length; k++){
		gamma[k] === "1" ? epsilon += "0" : epsilon += "1";
	}
		let decEps = parseInt(epsilon, 2);
		let decGam = parseInt(gamma, 2);
		console.log(decEps * decGam)
}	
}
