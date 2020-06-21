export const checkWord = (puzzle, pos1, pos2) => {

  let xDiff = pos1[0]-pos2[0], yDiff = pos1[1]-pos2[1];

  // Messy function, but checks if the 2 points makes an orientation.
  // First part checks that the value of both x's and both y's is the same value, meaning it is diagonal.
  //      - We also use Math.abs to remove the negative sign.
  // Second part checks if either of the x's or y's stays the same, which means it is going in one of the basic directions.
  // Could add to check that we don't click in the same spot
  if(((Math.abs(xDiff))-(Math.abs(yDiff))==0) || ((xDiff == 0) || (yDiff == 0))){

    






  }

}