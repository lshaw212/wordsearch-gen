// Set letters to fill spots around the puzzle.
// Look to generate letters based on common to the words the user is searchin for.

//To-add: Maybe use string? remove uncommon letters
const rndLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

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

const testPuzzle =[
  [["j"],["a"],["a"],["a"],["a"],["a"],["a"],["f"]],
  [["a"],["b"],["a"],["a"],["a"],["a"],["a"],["a"]],
  [["a"],["a"],["a"],["a"],["a"],["q"],["a"],["a"]],
  [["a"],["a"],["a"],["a"],["a"],["a"],["a"],["a"]],
  [["a"],["a"],["a"],["a"],["a"],["a"],["o"],["a"]],
  [["a"],["a"],["x"],["a"],["c"],["a"],["a"],["a"]],
  [["a"],["a"],["a"],["a"],["v"],["a"],["a"],["a"]],
  [["d"],["a"],["a"],["a"],["a"],["a"],["a"],["e"]]
];

// const drawPuzzle = (puzzle) => {
//   let output = '';

//   for (let i = 0, height = puzzle.length; i < height; i++){
//     let row = puzzle[i];

//     output += '<div>';

//     for(let j = 0, width = row.length; j < width; j++){
//       output += '<button className="puzzleSquare" >';
//       output += row[j] || '&nbsp;';
//       output += '</button>'
//     }
//     output += '</div>'
//   }
//   let value = document.querySelectorAll('#puzzle');
//   value[0].innerHTML = output;
//   console.log("drawPuzzle");
// }

