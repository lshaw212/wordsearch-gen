import { fwdCheck, backCheck, upCheck, downCheck } from './PlaceWord';
// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let testPuzzle1 =[
  [[""],[""],[""],["e"],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],["e"],[""],["r"],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]],
  [[""],[""],[""],[""],[""],[""],[""],[""]]
];

let testPuzzle =[
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","e","","r","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""],
  ["","","","","","","",""]
];

export const addWord = (size, word) => {
  // let pos = [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1];
  let pos = [0,0];

  if(checkArea(word.length,(size+1),pos[0],pos[1])){
    console.log(pos);
    direction(word, pos);
  } else {
    console.log("No!");
  }
  
}

const direction = (word, pos) => {
  // switch(Math.floor(Math.random() * 4)+1)
  switch(1)
  {
    // forward
    case 1:
      console.log("case 1");
      fwdCheck(word, testPuzzle, pos);
      break;
    // back
    case 2:
      backCheck(word, testPuzzle, pos);
      console.log("case 2");
      console.log(testPuzzle);
      break;
    // up
    case 3:
      upCheck(word, testPuzzle, pos);
      console.log("case 3");
      console.log(testPuzzle);
      break;
    // down
    case 4:
      downCheck(word, testPuzzle, pos);
      console.log("case 4")
      console.log(testPuzzle);
      break;
    default:
      console.log("we hit default");
      break;
  }
}


// Checking position of the grid, that a word could fit into any of the directions
const checkArea = (length,size,x,y) => {
  if(((x+length)<=size || (x-length)>=0) || ((y+length)<=size || (y-length)>=0))
    return true;
  else
    return false;
}

export const fillBlanks = () => {
  return "[]";
}

// Initalizes empty puzzle
export const setEmptyPuzzle = () => {
  let puzzle = [];
  for (let i = 0; i < 8; i++) {
    puzzle.push([]);
    for (let j = 0; j < 8; j++) {
      puzzle[i].push('');
    }
  }
  return puzzle;
}

// Filling puzzle with random letters
// To-add: Change this to only fill empty strings
export const setFilledPuzzle = () => {
  let puzzle = [];
  for (let i = 0; i < 8; i++) {
    puzzle.push([]);
    for (let j = 0; j < 8; j++) {
      puzzle[i].push(`${rndLetters[Math.floor(Math.random() * rndLetters.length)]}`);
    }
  }
  return puzzle;
}

