import { fwdCheck, backCheck, upCheck, downCheck, neCheck, seCheck, swCheck, nwCheck, findDirections, orientations } from './PlaceWord';
// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let testPuzzle2 =[
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""],
  ["","","","","","","","",""]
];



export const setEmptyPuzzle = (size) => {
  let puzzle = [];
  for (let i = 0; i < size; i++) {
    puzzle.push([]);
    for (let j = 0; j < size; j++) {
      puzzle[i].push('');
    }
  }
  return puzzle;
}

export const retrievePuzzle = () => {
  return testPuzzle;
}

let testPuzzle

let positionList = [];

export const generatePuzzle = (size, words) => {
testPuzzle=setEmptyPuzzle(size);
words.forEach(element => {
  addWord(size, element);
});
fillPuzzle(testPuzzle);
}

// ISSUES:
// if position is valid, but you can't find directions, the word is skipped.
export const addWord = (size, word) => {

  let wordPlaced = false;
  while(!wordPlaced){
    let pos = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    // let pos = [0,0];
  
    if(checkValidCell(word.length,(size+1),pos[0],pos[1])){
      
        
        positionList = findDirections(word, word.length, testPuzzle, pos, size);
        if(positionList.length > 0){
          console.log(positionList);
          direction(word, pos, positionList);
          wordPlaced = true;
        }
        
    } else {
      console.log("Area Checked: CANNOT PLACE WORD");
      console.log("Position: " + pos);
    }
  }
  console.log("Word has been placed")
  return;
}

const direction = (word, pos, positionList) => {
  let rnd = positionList[Math.floor(Math.random() * positionList.length)], wordArr = [];
  wordArr = word.split('');
  switch(rnd)
  {
    case "forward":
      fwdCheck(wordArr, testPuzzle, pos)
      console.log("forward");
      break;
    case "back":
      backCheck(wordArr, testPuzzle, pos)
      console.log("back");
      break;
    case "up":
      upCheck(wordArr, testPuzzle, pos)
      console.log("up");
      break;
    case "down":
      downCheck(wordArr, testPuzzle, pos)
      console.log("down");
      break;
    case "northEast":
      neCheck(wordArr, testPuzzle, pos)
      console.log("North East");
      break;
    case "southEast":
      seCheck(wordArr, testPuzzle, pos)
      console.log("South East");
      break;
    case "southWest":
      swCheck(wordArr, testPuzzle, pos)
      console.log("South West");
      break;
    case "northWest":
      nwCheck(wordArr, testPuzzle, pos)
      console.log("North West");
      break;
    default:
      console.log("we hit default");
      break;
  }
}


// Checking position of the grid, that a word could fit into any of the directions
const checkValidCell = (length,size,x,y) => {
  if(((x+length)<=size || (x-length)>=0) || ((y+length)<=size || (y-length)>=0))
    return true;
  else
    return false;
}

// Filling puzzle with random letters
const fillPuzzle = (puzzle) => {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if(puzzle[i][j] === '')
        puzzle[i].splice([j],1,`${rndLetters[Math.floor(Math.random() * rndLetters.length)]}`);
    }
  }
  return puzzle;
}