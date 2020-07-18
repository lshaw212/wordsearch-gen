export const checkWord = (puzzle, pos1, pos2) => {

  let xDiff = pos1[0]-pos2[0], yDiff = pos1[1]-pos2[1];

  // Messy function, but checks if the 2 points makes an orientation.
  // First part checks that the value of both x's and both y's is the same value, meaning it is diagonal.
  //      - We also use Math.abs to remove the negative sign.
  // Second part checks if either of the x's or y's stays the same, which means it is going in one of the basic directions.
  console.log(puzzle[pos1[1]][pos1[0]]);
  console.log(puzzle[pos2[1]][pos2[0]]);
  console.log(pos1);
  console.log(pos2);
  // Could add to check that we don't click in the same spot
  if(((Math.abs(xDiff))-(Math.abs(yDiff))===0) || ((xDiff === 0) || (yDiff === 0))){
    
    // Following functions are very messy, looking at ways to improve this check, wanting to get this working to an extent first.

    console.log("X Diff " + xDiff);
    console.log("Y Diff " + yDiff);

    const getString = () => {
      // for (let i = 0; i < ; i++) {
      // }

    }
    //
    //
    //negative x
    //
    //
    if(xDiff < 0){
      //negative y
      if(yDiff<0){
        console.log("Negative X, Negative Y");
      }
      //positive y
      if(yDiff>0){
        console.log("Negative X, Positive Y");
      }
    }
    //
    //
    //positive x
    //
    //
    if(xDiff > 0){
      //negative y
      if(yDiff<0){
        console.log("Positive X, Negative Y");
      }
      //positive y
      if(yDiff>0){
        console.log("Positive X, Positive Y");
      }
    }

    //
    //
    // X axis doesn't move
    //
    //
    if(xDiff === 0){
      //negative y
      if(yDiff<0){
        console.log("X axis doesn't move, Negative Y");
      }
      //positive y
      if(yDiff>0){
        console.log("X axis doesn't move, Positive Y");
      }
      return;
    }
    //
    //
    // Y axis doesn't move
    //
    //
    if(yDiff === 0){
      //negative x
      if(xDiff<0){
        console.log("Negative X, Y axis doesn't move");
      }
      //positive x
      if(xDiff>0){
        console.log("Positive X, Y axis doesn't move");
      }
      return;
    }
  } else {
    console.log("NOT A VALID ORIENTATION");
  }
}