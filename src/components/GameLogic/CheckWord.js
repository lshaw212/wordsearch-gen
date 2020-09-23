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
      let value = '';
      let posArr = [];
      // let wordData = {};
      let length = Math.max(Math.abs(xDiff), Math.abs(yDiff));
      // console.log(length);
      for (let i = 0; i < (length + 1); i++) {
        console.log("x:" + (pos1[1]+(y*i)) + " & y:" + (pos1[0]+(x*i)));
        posArr.push([(pos1[1]+(y*i)),(pos1[0]+(x*i))]);
        value = value + puzzle[(pos1[1]+(y*i))][(pos1[0]+(x*i))]
      }
      // console.log(posArr);
      let wordData = {value, posArr}
      return wordData;
    }
      if(yDiff<0 && xDiff < 0) // UP + RIGHT: Negative X, Negative Y
        return getString(-1,-1) 
      if(yDiff>0 && xDiff < 0) // DOWN + RIGHT: Negative X, Positive Y
        return getString(-1,1);      
      if(yDiff<0 && xDiff > 0) // UP + LEFT: Positive X, Negative Y
        return getString(1,-1);     
      if(yDiff>0 && xDiff > 0) // DOWN + LEFT: Positive X, Positive Y
        return getString(1,1);  
      if(yDiff<0 && xDiff === 0) // UP: X axis doesn't move, Negative Y
        return getString(0,-1);  
      if(yDiff>0 && xDiff === 0) // DOWN: X axis doesn't move, Positive Y
        return getString(0,1); 
      if(xDiff<0 && yDiff === 0) // RIGHT: Negative X, Y axis doesn't move
        return getString(-1,0);      
      if(xDiff>0 && yDiff === 0) // LEFT: Positive X, Y axis doesn't move
        return getString(1,0);
  } else {
    console.log("NOT A VALID ORIENTATION");
  }
}