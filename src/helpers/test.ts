import { capitalize } from "./index";

describe("Should test the helper functions", () => {
  it("Should test the capitalize function", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
});
