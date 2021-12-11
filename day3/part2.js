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

let index = 0;


let mostCommon;
let leastCommon;

findMostCommonNum(input);

function findMostCommonNum(arr) {

let onesArr = [];
let zerosArr = [];

	arr.forEach(num => {
	num[index] === "1" ? onesArr.push(num) : zerosArr.push(num);
	});
	if(index < arr[0].length){
		index++;
	}else{
		index = 0;
	}	
		if(leastCommon == null){		
		numKeepersUncommon(onesArr, zerosArr);	
			
		}else{			 	
				numKeepersCommon(onesArr, zerosArr);
				
	} 
}

function numKeepersCommon(ones, zeros){
if(ones.length >=1 && zeros.length >= 1) {
	(ones.length > zeros.length || ones.length === zeros.length) ? findMostCommonNum(ones) : findMostCommonNum(zeros);
	} else {
	 ones.length > zeros.length ? mostCommon = ones		[0] : mostCommon = zeros[0];
	}
}

function numKeepersUncommon(ones, zeros){
	if(ones.length >=1 && zeros.length >= 1) {
	(ones.length > zeros.length || ones.length === 	zeros.length) ? findMostCommonNum(zeros) : findMostCommonNum(ones);
	} else {
	ones.length > zeros.length ? leastCommon = 
	ones[0] : leastCommon = zeros[0];
	onesArr = [];
	zerosArr = [];
	index = 0;
	findMostCommonNum(input);
	}
}

console.log(parseInt(leastCommon, 2) * parseInt(mostCommon, 2))
