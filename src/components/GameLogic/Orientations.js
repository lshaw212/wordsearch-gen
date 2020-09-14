// Check is cell to place a word in is empty or contains the exact same character

const orientationsArray = ["forward", "back", "up", "down", "northEast", "southEast", "southWest", "northWest"];

// Every orientation possible for our words to be positioned.
// Each of these functions can be looped through in the direction function.
// We check if the max length is possible to be placed in our word search.
// If true, we check each position individually for it being empty or containing a similar value.
const orientations = {
  forward: function(word, length, puzzle, pos, size){
    if(pos[0]+length <= size){
      return word.every(function(val,i){
        console.log(puzzle);
        return puzzle[pos[1]][pos[0]+i] === '' || puzzle[pos[1]][pos[0]+i] === val;
      });
    }
  },
  back: function(word, length, puzzle, pos, size){
    if(pos[0]-length >= 0){
      return word.every(function(val,i){
        return puzzle[pos[1]][pos[0]-i] === '' || puzzle[pos[1]][pos[0]-i] === val;
      });
    }
  },
  up: function(word, length, puzzle, pos, size){
    if(pos[1]-length >= 0){
      // console.log(pos[1]-length);
      return word.every(function(val,i){
        return puzzle[pos[1]-i][pos[0]] === '' || puzzle[pos[1]-i][pos[0]] === val;
      });
    }
  },
  down: function(word, length, puzzle, pos, size){
    if(pos[1]+length <= size){
      return word.every(function(val,i){
        return puzzle[pos[1]+i][pos[0]] === '' || puzzle[pos[1]+i][pos[0]] === val;
      });
    }
  },
  northEast: function(word, length, puzzle, pos, size){
    if(pos[0]+length <= size && pos[1]-length >=0){
      return word.every(function(val,i){
        return puzzle[pos[1]-i][pos[0]+i] === '' || puzzle[pos[1]-i][pos[0]+i] === val;
      });
    }
  },
  southEast: function(word, length, puzzle, pos, size){
    if(pos[0]+length <= size && pos[1]+length <=size){
      return word.every(function(val,i){
        return puzzle[pos[1]+i][pos[0]+i] === '' || puzzle[pos[1]+i][pos[0]+i] === val;
      });
    }
  },
  southWest: function(word, length, puzzle, pos, size){
    if(pos[0]-length >= 0 && pos[1]+length <=size){
      return word.every(function(val,i){
        return puzzle[pos[1]+i][pos[0]-i] === '' || puzzle[pos[1]+i][pos[0]-i] === val;
      });
    }
  },
  northWest: function(word, length, puzzle, pos, size){
    if(pos[0]-length >= 0 && pos[1]-length >=0){
      return word.every(function(val,i){
        return puzzle[pos[1]-i][pos[0]-i] === '' || puzzle[pos[1]-i][pos[0]-i] === val;
      });
    }
  }
}


// Put the word through each orientation check to create a list of directions the word can be placed
export const findDirections = (word, length, puzzle, pos, size) => {
  let wordArr = [], directionArr = [];
  wordArr = word.split('');

  orientationsArray.forEach(function(ori, i){
    if(orientations[ori](wordArr, length, puzzle, pos, size))
      directionArr.push(ori);
  });
  return directionArr;
}

// Once an orientation is possible, we can use one of the selected functions to place a word in the array.
// Each of the functions is diffenent to place the word in a chosen orientation.
export const fwdCheck = (word, puzzle, pos) => {
  try {
    word.forEach(function(val, i){
      puzzle[pos[1]].splice((pos[0]+i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in forward position");
  }
}

export const backCheck = (word, puzzle, pos) => {
  try {
    word.forEach(function(val, i){
      puzzle[pos[1]].splice((pos[0]-i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in back position");
  }
  
}
export const upCheck = (word, puzzle, pos) => {
  try {
    word.forEach(function(val, i){
      puzzle[pos[1]-i].splice((pos[0]),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in up position");
  }
}
export const downCheck = (word, puzzle, pos) => {
  try{
    word.forEach(function(val, i){
      puzzle[pos[1]+i].splice((pos[0]),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in down position");
  }
}
export const neCheck = (word, puzzle, pos) => {
  try{
    word.forEach(function(val, i){
      puzzle[pos[1]-i].splice((pos[0]+i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in north east position");
  }
}
export const seCheck = (word, puzzle, pos) => {
  try{
    word.forEach(function(val, i){
      puzzle[pos[1]+i].splice((pos[0]+i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in south east position");
  }
}
export const swCheck = (word, puzzle, pos) => {
  try{
    word.forEach(function(val, i){
      // console.log(puzzle[pos[1]]);
      puzzle[pos[1]+i].splice((pos[0]-i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in south west position");
  }
}
export const nwCheck = (word, puzzle, pos) => {
  try{
    word.forEach(function(val, i){
      puzzle[pos[1]-i].splice((pos[0]-i),1,val);
    });
    console.log(puzzle);
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in north west position");
  }
}