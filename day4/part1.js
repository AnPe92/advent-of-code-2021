let input = `
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
 
 14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
`

let getCardNumsReg = /[0-9]+/;

let newInput = input.trim().split(/\n/)
let drawnNums =newInput[0].split(",")
let cardColsNRows;
let cardCols = [];
let cardRowers = [];

newInput.shift();
let cardRows = newInput.forEach(arr => cardRowers.push(arr.trim().split(/\s+/).map(Number)));
	cardRowers.forEach(	function(item, index, object) {
  if (item.length < 5) {
    object.splice(index, 1);
  }
	}
	);
/* let cardCols = [];
cardRows.forEach(row => {cardCols.push(row.split(" "))}); */

/* 
allpc = {
	card1: {
		rows: [],
		columns: []
		},
		card2: {
			rows: [],
			columns: []
		}
	} */

let allPlayCards = {};

for(let i = 0; i < cardRowers.length / 5; i++) {
	allPlayCards['card'+i] = {};
	allPlayCards['card'+i].rows = [];
	for(let j = 0; j < 5; j++){
		allPlayCards['card'+i].rows.push(cardRowers[j+i*5]);
	}
	
}

console.log(allPlayCards);

