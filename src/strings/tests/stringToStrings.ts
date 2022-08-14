import { logger } from "../../utils/logger";
import { StringToStringTest, toStringFunction } from "../helper";

export const lowerCaseTests = [
  new StringToStringTest(["A"], "a"),
  new StringToStringTest(["b"], "b"),
  new StringToStringTest(["aa"], "aa"),
  new StringToStringTest(["z"], "z"),
  new StringToStringTest(["bbb"], "bbb"),
  new StringToStringTest(["BBBB"], "bbbb"),
];
export const reverseCaseTests = [
  new StringToStringTest(["aAa"], "AaA"),
  new StringToStringTest(["bBb"], "BbB"),
  new StringToStringTest(["aaAA"], "AAaa"),
  new StringToStringTest(["hhZZ"], "HHzz"),
];

export const lengthsStrTests = [
  new StringToStringTest([""], "0"),
  new StringToStringTest(["aaa"], "3"),
  new StringToStringTest(["a"], "1"),
  new StringToStringTest(["aaaa"], "aaaa"),
];
export const reversStrTests = [
  new StringToStringTest([""], ""),
  new StringToStringTest(["aaa"], "aaa"),
  new StringToStringTest(["abc"], "cba"),
  new StringToStringTest(["ghhh"], "hhhg"),
  new StringToStringTest(["cool"], "looc"),
];
export function runStringToStringTest(
  fun: toStringFunction,
  tests: Array<StringToStringTest>
) {
  tests.forEach((element: StringToStringTest) => {
    if (fun(element.args[0]) == element.result) {
      logger.success(fun.name + `(${element.args}):${element.result}`);
    } else {
      logger.logError(fun, element);
    }
  });
}
