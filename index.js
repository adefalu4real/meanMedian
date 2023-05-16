function mean(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return Math.trunc(sum / arr.length);
}

const median = (arr) => {
  const { length } = arr;

  arr.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }

  return arr[(length - 1) / 2];
};

const mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 7];
console.log(mean(arr));
console.log(median(arr));
console.log(mode(arr));
