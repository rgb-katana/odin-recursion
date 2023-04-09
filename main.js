"use strict";

function fibs(number) {
  const fibArr = [0, 1];
  let curIndex = 0;
  while (fibArr.length < number) {
    fibArr.push(fibArr[curIndex] + fibArr[curIndex + 1]);
    curIndex++;
  }
  console.log(fibArr);
}

// fibs(8);

function fibsRec(number, arr, curIndex) {
  if (arr.length === number) {
    console.log(arr);
  } else {
    arr.push(arr[curIndex] + arr[curIndex + 1]);
    curIndex++;
    fibsRec(number, arr, curIndex);
  }
}

function merge(left, right) {
  const newArr = [];
  const totalLength = left.length + right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  for (let k = 0; k < totalLength; k++) {
    if (left[leftIndex] > right[rightIndex]) {
      newArr.push(right[rightIndex]);
      rightIndex++;
      if (rightIndex === right.length) {
        newArr.push(...left.slice(leftIndex));
        return newArr;
      }
    } else {
      newArr.push(left[leftIndex]);
      leftIndex++;
      if (leftIndex === left.length) {
        newArr.push(...right.slice(rightIndex));
        return newArr;
      }
    }
  }
  return newArr;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const halfIndex = Math.floor(array.length / 2);

    const leftHalf = array.slice(0, halfIndex);
    const rightHalf = array.slice(halfIndex);

    const leftHalfSorted = mergeSort(leftHalf);
    const rightHalfSorted = mergeSort(rightHalf);

    return merge(leftHalfSorted, rightHalfSorted);
  }
}

console.log(mergeSort([8, 3, 5, 2, 99, 1, 1, 4, 9]));
