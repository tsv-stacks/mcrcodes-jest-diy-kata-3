const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  test("check parameter boolean true returns string Yes", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  test("check parameter boolean false returns string No", () => {
    expect(booleanToWord(false)).toBe("No");
  });

  test("check parameter string true return not a boolean", () => {
    expect(booleanToWord("true")).toBe("Not a Boolean");
  });

  test("check parameter string false return not a boolean", () => {
    expect(booleanToWord("false")).toBe("Not a Boolean");
  });
});
