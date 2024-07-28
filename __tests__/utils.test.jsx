import { testUtil } from "../lib/utils";

describe("testUtil function", () => {
  it("returns the correct value", () => {
    expect(testUtil()).toBe("Test Util Function");
  });
});
