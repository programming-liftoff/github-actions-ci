var add = require("./add").add;

describe("add", function () {
  it("adds two numbers", function () {
    expect(add(1, 2)).toEqual(3);
  });
});
