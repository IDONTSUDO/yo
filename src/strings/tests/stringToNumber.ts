import { logger } from "../../utils/logger";
import { stringToNumberFunction, StringToNumberTest } from "../helper";

export const strLengthWtf = [
  new StringToNumberTest(["a"], 2),
  new StringToNumberTest(["aaa"], 4),
  new StringToNumberTest(["aaaa"], 5),
];
export function runToStringAtNumberFunction(
  fun: stringToNumberFunction,
  tests: Array<StringToNumberTest>
) {
  tests.forEach((element: StringToNumberTest) => {
    if (fun(element.args[0]) == element.result) {
      logger.success(fun.name + `(${element.args}):${element.result}`);
    } else {
      logger.logErrors(fun, element);
    }
  });
}
