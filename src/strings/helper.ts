export class StringToNumberTest {
  result: Number;
  args: Array<String>;
  constructor(args: Array<String>, result: Number) {
    this.result = result;
    this.args = args;
  }
}
export class StringToStringTest {
  result: String;
  args: Array<String>;
  constructor(args: Array<String>, result: String) {
    this.result = result;
    this.args = args;
  }
}

export type toStringFunction = (p1: String) => String;
export type stringToNumberFunction = (p1: String) => Number;
export type stringToStringDoubleArgumentsFunctionType = (
  p1: String,
  p2: String
) => String;
export type toDoubleStringParametesFunctionNumber = (
  p1: String,
  p2: String
) => Number;
