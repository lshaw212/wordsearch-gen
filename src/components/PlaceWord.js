const checkCells = (word, puzzle, pos) => {
  let arr = [];
  arr = word.split('');
  // arr.forEach(function(val, i){
  //   if(puzzle[pos[0]][pos[1]+i] == ''){
  //     console.log("blank space")
  //     return true;
  //   } else if(puzzle[pos[0]][pos[1]+i] == val) {
  //     console.log("We have a matching word!");
  //     return true;
  //   } else {
  //     console.log("word in cell BUT not matching");
  //     return false;
  //   }
  // });

  arr.every(function(val, i){
    return puzzle[pos[0]][pos[1]+i] == '' || puzzle[pos[0]][pos[1]+i] == val;
  })

}


export const fwdCheck = (word, puzzle, pos) => {
    let arr = [];
    arr = word.split('');
    console.log("boo");
    if(!checkCells(word, puzzle, pos)){
      console.log("?");
      arr.forEach(function(val, i){
        puzzle[pos[1]].splice((pos[0]+i),1,val);
      });
      console.log(puzzle);
    }
    return puzzle;
}

export const fwdCheck2 = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    // console.log(pos);
    arr.forEach(function(val, i){
      console.log(puzzle[pos[0+i]][pos[1]]);
      // if(puzzle[pos[0+i]][pos[1]] == ''){
        
      // }
      // else{
      //
      // }
      // puzzle[pos[1]].splice((pos[0]+i),1,val);
    });
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in forward position");
  }
}

export const backCheck = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    arr.forEach(function(val, i){
      puzzle[pos[1]].splice((pos[0]-i),1,val);
    });
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in back position");
  }
  
}
export const upCheck = (word, puzzle, pos) => {
  try {
    let arr = [];
    arr = word.split('');
    arr.forEach(function(val, i){
      puzzle[pos[1]-i].splice((pos[0]),1,val);
    });
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in up position");
  }
}
export const downCheck = (word, puzzle, pos) => {
  try{
    let arr = [];
    arr = word.split('');
    arr.forEach(function(val, i){
      puzzle[pos[1]+i].splice((pos[0]),1,val);
    });
    return puzzle;
  } catch {
    console.log("ERROR: Can't place word in down position");
  }
}