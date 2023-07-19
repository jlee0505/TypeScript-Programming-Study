type Reservation = {
  // ...
};

type Reserve = {
  (from: Date, to: Date, dest: string): Reservation; // 편도 여행
  (from: Date, dest: string): Reservation; // 왕복 여행
};

const reserve: Reserve = (
  from: Date,
  toOrDest: Date | string,
  dest?: string
) => {
  //...
  if (toOrDest instanceof Date && dest !== undefined) {
    // 편도 여행
  } else {
    // 왕복 여행
  }
  const reservation = {};
  return reservation;
};

type Filter = {
  <T>(arr: T[], fn: (item: T) => boolean): T[];
};
const filter: Filter = (arr, fn) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) result.push(arr[i]);
  }

  return result;
};

const result = filter([1, 2, 3, 4, 5], (v) => v < 3); // [1,2]
console.log(result);

type MapType = {
  <T>(arr: T[], fn: (v: T) => T): T[];
};
const map: MapType = (arr, fn) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }

  return result;
};

const result2 = map([1, 2, 3, 4, 5], (v) => v + 5); // [6,7,8,9,10]
console.log(result2);
