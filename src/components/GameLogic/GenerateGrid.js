import { fwdCheck, backCheck, upCheck, downCheck, neCheck, seCheck, swCheck, nwCheck, findDirections } from './Orientations';
// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let puzzle, orientationList = [];
let usedOrientations = [
  {"count": 0, "Orientation": "forward"},
  {"count": 0, "Orientation": "back"},
  {"count": 0, "Orientation": "up"},
  {"count": 0, "Orientation": "down"},
  {"count": 0, "Orientation": "northEast"},
  {"count": 0, "Orientation": "southEast"},
  {"count": 0, "Orientation": "southWest"},
  {"count": 0, "Orientation": "northWest"},
]

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
  return puzzle;
}


// This function generates the puzzle in an array.
// We take all the words and put them into the addWord function.
// After all our words have been added, we fill up the array with random words.
export const generatePuzzle = (size, words) => {
puzzle=setEmptyPuzzle(size);
words.forEach(element => {
  addWord(size, element);
});
fillPuzzle(puzzle);
}

// ISSUES:
// if position is valid, but you can't find directions, the word is skipped.
export const addWord = (size, word) => {

  let wordPlaced = false;
  while(!wordPlaced){
    
    //Issues only uses a static 9 for size
    // Randomise the position for each word
    let pos = [Math.floor(Math.random() * (size-1)), Math.floor(Math.random() * (size-1))];
    // let pos = [0,0];

    console.log(pos);
  
    if(checkValidCell(word.length,(size+1),pos[0],pos[1])){
      
        
      orientationList = findDirections(word, word.length, puzzle, pos, size);
        if(orientationList.length > 0){
          console.log(orientationList);
          direction(word, pos, orientationList);
          wordPlaced = true;
        } else {
          console.log("Word can't be placed");
        }
        
    } else {
      console.log("Area Checked: CANNOT PLACE WORD");
      // console.log("Position: " + pos);
    }
  }
  // console.log("Word has been placed")
  return;
}

// We randomize a orientation from our list and place the letters in that direction
const direction = (word, pos, orientationList) => {
  let rnd, wordArr = [];

  if(usedOrientations.length > 0){

    mainLoop:
    for(let i = 0; i < 10; i++){
      for (let j = 0; j < usedOrientations.length; j++){
        if(usedOrientations[j].count === i && orientationList.includes(usedOrientations[j].Orientation)){
          rnd = usedOrientations[j].Orientation;
          // usedOrientations = usedOrientations.map(el => el.Orientation == rnd ? {...el, count: []})
          let newOri = usedOrientations.map(el => {
                                        if(el.Orientation == rnd)
                                            return Object.assign({}, el, {count: el.count+1});
                                        return el
          });
          // console.log(rnd);
          // console.log(newOri);
          console.log("we breaking the mainLoop");
          break mainLoop;
        }
      }
    }
  } else {
    rnd = orientationList[Math.floor(Math.random() * orientationList.length)];
  }

  
  wordArr = word.split('');
  switch(rnd)
  {
    case "forward":
      fwdCheck(wordArr, puzzle, pos)
      console.log("Word placed in FORWARD position");
      break;
    case "back":
      backCheck(wordArr, puzzle, pos)
      console.log("Word placed in BACK position");
      break;
    case "up":
      upCheck(wordArr, puzzle, pos)
      console.log("Word placed in UP position");
      break;
    case "down":
      downCheck(wordArr, puzzle, pos)
      console.log("Word placed in DOWN position");
      break;
    case "northEast":
      neCheck(wordArr, puzzle, pos)
      console.log("Word placed in NORTH EAST position");
      break;
    case "southEast":
      seCheck(wordArr, puzzle, pos)
      console.log("Word placed in SOUTH EAST position");
      break;
    case "southWest":
      swCheck(wordArr, puzzle, pos)
      console.log("Word placed in SOUTH WEST position");
      break;
    case "northWest":
      nwCheck(wordArr, puzzle, pos)
      console.log("Word placed in NORTH WEST position");
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