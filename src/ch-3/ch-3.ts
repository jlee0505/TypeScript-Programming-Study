type Obj = {
  b: number;
  c?: string;
  readonly d: string;
  [key: number]: boolean;
};

const enum Color {
  Red = "#c10000",
  Blue = "#007ac1",
  Pink = 0xc10050,
  White = 255,
}
const a = Color.Red; // "#c10000"
const b1 = Color.White; // 255
const b2 = Color['White']; // 255
const b3 = Color[255] // "White", 단, const enum으로 정의한 경우는 Error
const b4 = Color.255 // Error

const c = Color[6];
// enum Color
console.log(c) // undefined
// const enum Color
console.log(c) // error TS2476: A const enum member can only be accessed using a string literal.