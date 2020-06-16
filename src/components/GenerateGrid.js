import { fwdCheck, backCheck, upCheck, downCheck, findDirections, orientations } from './PlaceWord';
// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

const setEmptyPuzzle = (size) => {
  let puzzle = [];
  for (let i = 0; i < size; i++) {
    puzzle.push([]);
    for (let j = 0; j < size; j++) {
      puzzle[i].push('');
    }
  }
  return puzzle;
}


//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// let testPuzzle =[
//   ["","","","","","","","",""],
//   ["","","","","","","","",""],
//   ["","","","","","","","",""],
//   ["","","","","","","","",""],
//   ["","","","","","","","b","b"],
//   ["","","","","","","","",""],
//   ["","","","","","","","",""],
//   ["","","","","","","","",""],
//   ["","","","","","","","",""]
// ];

let testPuzzle = setEmptyPuzzle(9);

let positionList = [];

export const addWord = (size, word) => {
  // let pos = [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9)];
  let pos = [0,0];

  if(checkValidCell(word.length,(size+1),pos[0],pos[1])){
    
      console.log("Area checked: Word can be placed");
      console.log("Position: "+pos)
      // console.log(testPuzzle);
      positionList = findDirections(word, word.length, testPuzzle, pos, size);
      direction(word, pos, positionList);
      console.log(positionList);
  } else {
    console.log("Area Checked: CANNOT PLACE WORD");
  }
}

const direction = (word, pos, positionList) => {
  // switch(Math.floor(Math.random() * 4)+1)
  // switch(1)
  // "forward", "back", "up", "down", "NE-Diag", "SE-Diag", "SW-Diag", "NW-Diag"
  switch(positionList[Math.floor(Math.random() * positionList.length)])
  {
    // forward
    case "forward":
      fwdCheck(word, testPuzzle, pos)
      console.log("forward");
      break;
    case "back":
      backCheck(word, testPuzzle, pos)
      console.log("back");
      break;
    case "up":
      upCheck(word, testPuzzle, pos)
      console.log("up");
      break;
    case "down":
      downCheck(word, testPuzzle, pos)
      console.log("down");
      break;
    case "NE-Diag":
      console.log("NE-Diag");
      break;
    case "SE-Diag":
      console.log("SE-Diag");
      break;
    case "SW-Diag":
      console.log("SW-Diag");
      break;
    case "NW-Diag":
      console.log("NW-Diag");
      break;
    case 1:
      console.log("Case 1: Forward Position");
      if(fwdCheck(word, testPuzzle, pos)){
        console.log("worked");
      } else {
        console.log("Nope");
      }
      break;
    // back
    case 2:
      console.log("Case 2: Back Position");
      if(backCheck(word, testPuzzle, pos)){
        console.log("worked");
      } else {
        console.log("Nope");
      }
      break;
    // up
    case 3:
      console.log("Case 3: Up Position");
      if(upCheck(word, testPuzzle, pos)){
        console.log("worked");
      } else {
        console.log("Nope");
      }
      break;
    // down
    case 4:
      console.log("Case 4: Down Position")
      if(downCheck(word, testPuzzle, pos)){
        console.log("worked");
      } else {
        console.log("Nope");
      }
      // checkMarker = false;
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

export const fillBlanks = () => {
  return "[]";
}

// Initalizes empty puzzle
// export const setEmptyPuzzle = () => {
//   let puzzle = [];
//   for (let i = 0; i < 8; i++) {
//     puzzle.push([]);
//     for (let j = 0; j < 8; j++) {
//       puzzle[i].push('');
//     }
//   }
//   return puzzle;
// }

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

