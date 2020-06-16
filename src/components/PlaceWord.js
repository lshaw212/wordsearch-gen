// Check is cell to place a word in is empty or contains the exact same character

const orientationsArray = ["forward", "back", "up", "down", "northEast", "southEast", "southWest", "northWest"];

// messy, clean up
const orientations = {
  forward: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]+i][pos[1]] === '' || puzzle[pos[0]+i][pos[1]] === val;
      });
    } catch {

    }
  },
  back: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]-i][pos[1]] === '' || puzzle[pos[0]-i][pos[1]] === val;
      });
    } catch {
      
    }
  },
  up: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]][pos[1]-i] === '' || puzzle[pos[0]][pos[1]-i] === val;
      });
    } catch {
      
    }
  },
  down: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]][pos[1]+i] === '' || puzzle[pos[0]][pos[1]+i] === val;
      });
    } catch {
      
    }
  },
  northEast: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]+i][pos[1]-i] === '' || puzzle[pos[0]+i][pos[1]-i] === val;
      });
    } catch {
      
    }
  },
  southEast: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]+i][pos[1]+i] === '' || puzzle[pos[0]+i][pos[1]+i] === val;
      });
    } catch {
      
    }
  },
  southWest: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]-i][pos[1]+i] === '' || puzzle[pos[0]-i][pos[1]+i] === val;
      });
    } catch {
      
    }
  },
  northWest: function(word, puzzle, pos){
    try{
      return word.every(function(val,i){
        return puzzle[pos[0]-i][pos[1]-i] === '' || puzzle[pos[0]-i][pos[1]-i] === val;
      });
    } catch {
      
    }
  }
}

const checkCells = (word, puzzle, pos, forumla) => {
  let arr = [];
  arr = word.split('');
  return arr.every(function(val, i){
    // console.log("Check Cells");
    return puzzle[pos[0]][pos[1]+i] === '' || puzzle[pos[0]][pos[1]+i] === val;
  })
}

export const findDirections = (word, length, puzzle, pos, size) => {
  
  let wordArr = [], directionArr = [];
  wordArr = word.split('');
  let forward = pos[0]+length <= size;

  // orientations["forward"]("yes");

  orientationsArray.forEach(function(ori, i){
    if(orientations[ori](wordArr,puzzle,pos))
      directionArr.push(ori);
    // puzzle[pos[1]].splice((pos[0]+i),1,val);
  });

  // if(forward){
  //   directionArr.push("forward");
  // if(pos[0]-length >= 0){
  //   directionArr.push("back");
  // }
  // if(pos[1]-length >= 0){
  //   directionArr.push("up");
  // }
  // if(pos[1]+length <= size){
  //   directionArr.push("down");
  // }
  // if(pos[0]+length <= size && pos[1]-length >=0){
  //   directionArr.push("NE-Diag");
  // }
  // if(pos[0]+length <= size && pos[1]+length <=size){
  //   directionArr.push("SE-Diag");
  // }
  // if(pos[0]-length >= 0 && pos[1]+length <=size){
  //   directionArr.push("SW-Diag");
  // }
  // if(pos[0]-length >= 0 && pos[1]-length >=0){
  //   directionArr.push("NW-Diag");
  // }

  // directionArr=["forward", "back", "up", "down", "NE-Diag", "SE-Diag", "SW-Diag", "NW-Diag"];

  return directionArr;
}

export const fwdCheck = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    // if(checkCells(word, puzzle, pos)){
      arr.forEach(function(val, i){
        puzzle[pos[1]].splice((pos[0]+i),1,val);
      });
      console.log(puzzle);
      return puzzle;
    // } else {
    //   console.log("Word cannot be placed, add code to try again");
    //   return false;
    // }
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in forward position");
  }
}

export const backCheck = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    // if(checkCells(word, puzzle, pos)){
      arr.forEach(function(val, i){
        puzzle[pos[1]].splice((pos[0]-i),1,val);
      });
      console.log(puzzle);
      return puzzle;
    // } else {
    //   console.log("Word cannot be placed, add code to try again");
    //   return false;
    // }
  } catch {
    console.log("ERROR: Can't place word in back position");
  }
  
}
export const upCheck = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    // if(checkCells(word, puzzle, pos)){
      arr.forEach(function(val, i){
        puzzle[pos[1]-i].splice((pos[0]),1,val);
      });
      console.log(puzzle);
      return puzzle;
    // } else {
    //   console.log("Word cannot be placed, add code to try again");
    //   return false;
    // }
  } catch {
    console.log("ERROR: Can't place word in up position");
  }
}
export const downCheck = (word, puzzle, pos) => {
  try{
    let arr = [];
    arr = word.split('');
    // if(checkCells(word, puzzle, pos)){
      arr.forEach(function(val, i){
        puzzle[pos[1]+i].splice((pos[0]),1,val);
      });
      console.log(puzzle);
      return puzzle;
    // } else {
    //   console.log("Word cannot be placed, add code to try again");
    //   return false;
    // }
  } catch {
    console.log("ERROR: Can't place word in down position");
  }
}