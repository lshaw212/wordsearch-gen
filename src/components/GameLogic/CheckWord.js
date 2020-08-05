export const checkWord = (puzzle, pos1, pos2) => {

  let xDiff = pos2[0]-pos1[0], yDiff = pos2[1]-pos1[1];

  // Messy function, but checks if the 2 points makes an orientation.
  // First part checks that the value of both x's and both y's is the same value, meaning it is diagonal.
  //      - We also use Math.abs to remove the negative sign.
  // Second part checks if either of the x's or y's stays the same, which means it is going in one of the basic directions.

  // Could add to check that we don't click in the same spot
  if(((Math.abs(xDiff))-(Math.abs(yDiff))===0) || ((xDiff === 0) || (yDiff === 0))){
    
    // Following functions are very messy, looking at ways to improve this check, wanting to get this working to an extent first.

    const getString = (x,y) => {
      let str = '';
      let length = Math.max(Math.abs(xDiff), Math.abs(yDiff));
      for (let i = 0; i < (length + 1); i++) {
        str = str + puzzle[(pos1[1]+(y*i))][(pos1[0]+(x*i))]
      }
      return str;
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
        return getString(-1,-1);
      }
      //positive y
      if(yDiff>0){
        console.log("Negative X, Positive Y");
        return getString(-1,1);
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
        return getString(1,-1);
      }
      //positive y
      if(yDiff>0){
        console.log("Positive X, Positive Y");
        return getString(1,1);
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
        return getString(0,-1);
      }
      //positive y
      if(yDiff>0){
        console.log("X axis doesn't move, Positive Y");
        return getString(0,1);
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
        return getString(-1,0);
      }
      //positive x
      if(xDiff>0){
        console.log("Positive X, Y axis doesn't move");
        return getString(1,0);
      }
      return;
    }
  } else {
    console.log("NOT A VALID ORIENTATION");
  }
}