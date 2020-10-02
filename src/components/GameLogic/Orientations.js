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
export const orientationCheck = {
  fwdCheck: function(word, puzzle, pos){
    try {
      word.forEach(function(val, i){
        puzzle[pos[1]].splice((pos[0]+i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in forward position");
    }
  },
  backCheck: function(word, puzzle, pos){
    try {
      word.forEach(function(val, i){
        puzzle[pos[1]].splice((pos[0]-i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in back position");
    } 
  },
  upCheck: function(word, puzzle, pos){
    try {
      word.forEach(function(val, i){
        puzzle[pos[1]-i].splice((pos[0]),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in up position");
    }
  },
  downCheck: function(word, puzzle, pos){
    try{
      word.forEach(function(val, i){
        puzzle[pos[1]+i].splice((pos[0]),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in down position");
    }
  },
  neCheck: function(word, puzzle, pos){
    try{
      word.forEach(function(val, i){
        puzzle[pos[1]-i].splice((pos[0]+i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in north east position");
    }
  },
  seCheck: function(word, puzzle, pos){
    try{
      word.forEach(function(val, i){
        puzzle[pos[1]+i].splice((pos[0]+i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in south east position");
    }
  },
  swCheck: function(word, puzzle, pos){
    try{
      word.forEach(function(val, i){
        puzzle[pos[1]+i].splice((pos[0]-i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in south west position");
    }
  },
  nwCheck: function(word, puzzle, pos){
    try{
      word.forEach(function(val, i){
        puzzle[pos[1]-i].splice((pos[0]-i),1,val);
      });
      return puzzle;
    } catch {
      console.log("ERROR: Can't place word in north west position");
    }
  }
}