import { findDirections, orientationCheck } from './Orientations';
// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let puzzle, orientationList = [];
// @TODO: Fix this feature
// let usedOrientations = [
//   {"count": 0, "Orientation": "forward"},
//   {"count": 0, "Orientation": "back"},
//   {"count": 0, "Orientation": "up"},
//   {"count": 0, "Orientation": "down"},
//   {"count": 0, "Orientation": "northEast"},
//   {"count": 0, "Orientation": "southEast"},
//   {"count": 0, "Orientation": "southWest"},
//   {"count": 0, "Orientation": "northWest"},
// ]
// console.log(JSON.parse(JSON.stringify(puzzle)));

let usedOrientations = [];

export const setEmptyPuzzle = (size) => {
  let puzzle = [];
  for (let i = 0; i < size; i++) {
    puzzle.push([]);
    for (let j = 0; j < size; j++) {
      puzzle[i].push('');
    }
    // console.log(JSON.parse(JSON.stringify(puzzle)));
  }
  return puzzle;
}

export const retrievePuzzle = () => {
  return puzzle;
}

export const initalisePuzzle = (size, words) => {
  let puzzle = generatePuzzle(size, words);
  fillPuzzle(puzzle);
}

// This function generates the puzzle in an array.
// We take all the words and put them into the addWord function.
// After all our words have been added, we fill up the array with random words.
export const generatePuzzle = (size, words) => {
  let result;
  puzzle=setEmptyPuzzle(size);
    for (let i = 0; i < words.length; i++) {
      result = addWord(size, words[i])
    }
  return puzzle;
}

// ISSUES:
// if position is valid, but you can't find directions, the word is skipped.
export const addWord = (size, word) => {

  let wordPlaced = false;
    while(!wordPlaced){
    //Issues only uses a static 9 for size
    // Randomise the position for each word
    
    let pos = [Math.floor(Math.random() * (size-1)), Math.floor(Math.random() * (size-1))];
  
    if(checkValidCell(word.length,(size+1),pos[0],pos[1])){
      orientationList = findDirections(word, word.length, puzzle, pos, size);
        if(orientationList.length > 0){
          // console.log(orientationList);
          direction(word, pos, orientationList);
          wordPlaced = true;
        } else {
          console.log("Word can't be placed");
        }
        
    } else {
      console.log("Area Checked: CANNOT PLACE WORD");
    }
  }
}

// We randomize a orientation from our list and place the letters in that direction
const direction = (word, pos, orientationList) => {
  let wordArr = [];
  let value;

  if(usedOrientations.length > 0){
    // Loops through the orientations and checks if any havent been used by seeing check if any haven;'t been used or have been used the least
    listLoop:
    for(let i = 0; i < 10; i++){
      for (let j = 0; j < orientationList.length; j++){
        if(!usedOrientations.includes(orientationList[j]) || usedOrientations.filter((v) => (v === orientationList[j])).length <= i){
          value = orientationList[j];
          usedOrientations.push(orientationList[j])
          break listLoop
        }
      }
    }
  } else {
    value = orientationList[Math.floor(Math.random() * orientationList.length)];
    usedOrientations.push(value);
  }

  
  wordArr = word.split('');
  switch(value)
  {
    case "forward":
      orientationCheck['fwdCheck'](wordArr, puzzle, pos) // console.log("Word placed in FORWARD position");
      break;
    case "back":
      orientationCheck['backCheck'](wordArr, puzzle, pos) // console.log("Word placed in BACK position");
      break;
    case "up":
      orientationCheck['upCheck'](wordArr, puzzle, pos) // console.log("Word placed in UP position");
      break;
    case "down":
      orientationCheck['downCheck'](wordArr, puzzle, pos) // console.log("Word placed in DOWN position");
      break;
    case "northEast":
      orientationCheck['neCheck'](wordArr, puzzle, pos) // console.log("Word placed in NORTH EAST position");
      break;
    case "southEast":
      orientationCheck['seCheck'](wordArr, puzzle, pos) // console.log("Word placed in SOUTH EAST position");
      break;
    case "southWest":
      orientationCheck['swCheck'](wordArr, puzzle, pos) // console.log("Word placed in SOUTH WEST position");
      break;
    case "northWest":
      orientationCheck['nwCheck'](wordArr, puzzle, pos) // console.log("Word placed in NORTH WEST position");
      break;
    default:
      break; // console.log("we hit default");
  }
}


// Checking position of the grid, that a word could fit into any of the directions
const checkValidCell = (length,size,x,y) => {
  if(((x+length)<=size || (x-length)>=0) || ((y+length)<=size || (y-length)>=0))
    return true;
  else
    return false;
}

// @TODO: Figure out whats going on with the fill function
// Filling puzzle with random letters
const fillPuzzle = (puzzle) => {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if(puzzle[i][j] === ''){
        puzzle[i].splice([j],1,`${rndLetters[Math.floor(Math.random() * rndLetters.length)]}`);
      }
    }
  }
  return puzzle;
}









    // mainLoop:
    // for(let i = 0; i < 10; i++){
    //   for (let j = 0; j < usedOrientations.length; j++){
    //     if(usedOrientations[j].count === i && orientationList.includes(usedOrientations[j].Orientation)){
    //       rnd = usedOrientations[j].Orientation;
    //       // usedOrientations = usedOrientations.map(el => el.Orientation == rnd ? {...el, count: []})
    //       let newOri = usedOrientations.map(el => {
    //                                     if(el.Orientation == rnd)
    //                                         return Object.assign({}, el, {count: el.count+1});
    //                                     return el
    //       });
    //       // Break out of the loop early
    //       break mainLoop;
    //     }
    //   }
    // }