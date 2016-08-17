import foo from "../src/foo";
import {ok, equal as eq, deepEqual as de} from "assert";
describe("foo", () => {
  it ("should return 1", () => {
    eq(foo(), 1);
  });
})
