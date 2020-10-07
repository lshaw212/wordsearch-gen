import {wordsFour, wordsFive, wordsSix, wordsSeven, wordsEight, wordsNine, wordsTen, wordsEleven } from './wordCollection';
import _ from 'lodash';

const rnd = (number) => {
  return Math.floor(Math.random() * (number-1))
}

export const wordGenerator = (size) => {

  let arr = [];

  if(size === 6){
    for (let i = 0; i < 4; i++) {
      arr.push(wordsFour[rnd(wordsFour.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsFive[rnd(wordsFive.length)]);
    }
    return _.shuffle(arr);
  }
  // 1 1 2 2 2 = 8
  if(size === 9){
    for (let i = 0; i < 2; i++) {
      arr.push(wordsFour[rnd(wordsFour.length)]);
    }
    for (let i = 0; i < 2; i++) {
      arr.push(wordsFive[rnd(wordsFive.length)]);
    }
    for (let i = 0; i < 2; i++) {
      arr.push(wordsSix[rnd(wordsSix.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsSeven[rnd(wordsSeven.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsEight[rnd(wordsEight.length)]);
    }
    return _.shuffle(arr);
  }
  // 1 1 1 1 1 2 2 2 = 11
  if(size === 12){
    for (let i = 0; i < 2; i++) {
      arr.push(wordsFour[rnd(wordsFour.length)]);
    }
    for (let i = 0; i < 2; i++) {
      arr.push(wordsFive[rnd(wordsFive.length)]);
    }
    for (let i = 0; i < 2; i++) {
      arr.push(wordsSix[rnd(wordsSix.length)]);
      }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsSeven[rnd(wordsSeven.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsEight[rnd(wordsEight.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsNine[rnd(wordsNine.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsTen[rnd(wordsTen.length)]);
    }
    for (let i = 0; i < 1; i++) {
      arr.push(wordsEleven[rnd(wordsEleven.length)]);
    }
    return _.shuffle(arr);
  }
  return;
}