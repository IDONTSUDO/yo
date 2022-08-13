import { logger } from "../../utils/logger";
import {
  StringToNumberTest,
  toDoubleStringParametesFunctionNumber,
} from "../helper";

export function runToDoubleStringAtNumber(
  fun: toDoubleStringParametesFunctionNumber,
  tests: Array<StringToNumberTest>
) {
  tests.forEach((element: StringToNumberTest) => {
    if (fun(element.args[0], element.args[1]) == element.result) {
      logger.success(fun.name + `(${element.args}):${element.result}`);
    } else {
      logger.logErrors(fun, element);
    }
  });
}
export const repeatSymbolsQuality = [
  new StringToNumberTest(["a", "a"], 1),
  new StringToNumberTest(["aaaRrrsra", "a"], 4),
  new StringToNumberTest(["aaaaDKDKDKDKa,3132a", "a"], 6),
  new StringToNumberTest(["aaa313131a,3132a", "31"], 4),
  new StringToNumberTest(["aaa313131a,3132a", "31"], 4),
  new StringToNumberTest(["a", "b"], 0),
  new StringToNumberTest(["a1a", "a1a"], 1),
];
