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

// fibsRec(8, [0, 1], 0);

// [4, 1, 7, 5]

function merge(left, right) {
  const newArr = [];

  console.log("INCOMING", left, right);

  const totalLength = left.length + right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  for (let k = 0; k < totalLength; k++) {
    if (left[leftIndex] > right[rightIndex]) {
      newArr.push(right[rightIndex]);
      rightIndex++;
      if (rightIndex === right.length) {
        newArr.push(...left.slice(leftIndex));
        console.log("returning", newArr);
        return newArr;
      }
    } else {
      newArr.push(left[leftIndex]);
      leftIndex++;
      if (leftIndex === left.length) {
        newArr.push(...right.slice(rightIndex));
        console.log("returning", newArr);
        return newArr;
      }
    }
  }

  console.log("returning", newArr);
  return newArr;
}

// console.log(merge([2, 5, 17], [9, 7, 11]));

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    console.log("--currently processing", array);
    const halfIndex = Math.floor(array.length / 2);

    const leftHalf = array.slice(0, halfIndex);
    const rightHalf = array.slice(halfIndex);

    console.log("FIRSTLY", leftHalf, rightHalf);

    leftHalfSorted = mergeSort(leftHalf);

    console.log(leftHalfSorted);

    rightHalfSorted = mergeSort(rightHalf);

    console.log(rightHalfSorted);

    console.log("--finishing processing", array);
    return merge(leftHalfSorted, rightHalfSorted);
  }
}

mergeSort([8, 2, 99, 1, 5, 4, 9, 6]);
