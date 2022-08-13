import { logger } from "../../utils/logger";
import {
  stringToStringDoubleArgumentsFunctionType,
  StringToStringTest,
} from "../helper";

export const unionStrTests = [
  new StringToStringTest(["a", "b"], "ab"),
  new StringToStringTest(["x", "x"], "xx"),
  new StringToStringTest(["j", "x"], "jx"),
  new StringToStringTest(["a", "e"], "ae"),
];
export const replaceStringTests = [
  new StringToStringTest(["arguments", "b"], "arguments"),
  new StringToStringTest(["arguments", "a"], "rguments"),
  new StringToStringTest(["arguments", "g"], "aruments"),
  new StringToStringTest(["hotRelload", "ll"], "hotReoad"),
];

export function runToDoubleStringParametesFunction(
  fun: stringToStringDoubleArgumentsFunctionType,
  tests: Array<StringToStringTest>
) {
  tests.forEach((element: StringToStringTest) => {
    if (fun(element.args[0], element.args[1]) == element.result) {
      logger.success(fun.name + `(${element.args}):${element.result}`);
    } else {
      logger.logDoubleArgsError(fun, element);
    }
  });
}
