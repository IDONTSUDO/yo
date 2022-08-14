import {
  StringToNumberTest,
  StringToStringTest,
  stringToStringDoubleArgumentsFunctionType,
} from "../strings/helper";

class Logger {
  logErrors(fun: Function, element: StringToStringTest | StringToNumberTest) {
    console.log("-----------");
    this._expected(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(element.result)
    );
    console.log("====>");
    this._returned(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(fun(element.args))
    );
    console.log("-----------");
  }
  logDoubleArgsError(
    fun: stringToStringDoubleArgumentsFunctionType,
    element: StringToStringTest
  ) {
    this._expected(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(element.result)
    );
    this._returned(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(fun(element.args[0], element.args[1]))
    );
  }
  logError(fun: (name: String) => String, element: StringToStringTest) {
    this._expected(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(element.result)
    );
    this._returned(
      fun.name +
        `(${this._magnets(element.args)}):` +
        this._blue(fun(element.args[0]))
    );
  }
  success(args: any) {
    console.log("\x1b[32m", "SUCCESS: " + args);
  }
  _expected(...args: any) {
    console.log("\x1b[31m", "ERROR:[EXPECTED] " + args);
  }
  _returned(...args: any) {
    console.log("\x1b[31m", "ERROR:[RETURNED] " + args);
  }
  _blue(s: any) {
    return "\x1b[34m" + s;
  }
  _magnets(s: any) {
    if (typeof s == "string") return "\x1b[35m" + s;
    if (Array.isArray(s)) {
      return "\x1b[35m" + this._spread(s);
    }
  }
  _spread(...s: any) {
    return s;
  }
}
export const logger = new Logger();
