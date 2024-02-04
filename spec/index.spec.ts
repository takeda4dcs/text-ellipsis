import { describe, expect, test } from "@jest/globals";
import { textEllipsisEnd, textEllipsisMiddle, textEllipsisStart } from "..";

describe("preProcess", () => {
  test("origin:foobarbazqux length:0", () => {
    expect(textEllipsisMiddle("foobarbazqux", 0)).toBe(undefined);
  });
  test("origin:'' length:0", () => {
    expect(textEllipsisMiddle("", 8)).toBe(undefined);
  });
  test("origin:foobar length:8", () => {
    expect(textEllipsisMiddle("foobar", 8)).toBe("foobar");
  });
});

describe("textEllipsisMiddle", () => {
  test("origin:foobarbazqux length:8", () => {
    expect(textEllipsisMiddle("foobarbazqux", 8)).toBe("foob…zqux");
  });
  test("origin:foobarbazqux length:7", () => {
    expect(textEllipsisMiddle("foobarbazqux", 7)).toBe("foob…qux");
  });
  test("origin:foobarbazqux length:7 ellipsis: '-'", () => {
    expect(textEllipsisMiddle("foobarbazqux", 7, "-")).toBe("foob-qux");
  });
  test("origin:foobarbazqux length:7, ellipsis: undefined, rear_longer: true", () => {
    expect(textEllipsisMiddle("foobarbazqux", 7, undefined, true)).toBe(
      "foo…zqux"
    );
  });
  test("origin:foobarbazqux length:1", () => {
    expect(textEllipsisMiddle("foobarbazqux", 1)).toBe("f…");
  });
  test("origin:foobarbazqux length:1, ellipsis: undefined, rear_longer: true", () => {
    expect(textEllipsisMiddle("foobarbazqux", 1, undefined, true)).toBe("…x");
  });
});

describe("textEllipsisStart", () => {
  test("origin:foobarbazqux length:8", () => {
    expect(textEllipsisStart("foobarbazqux", 8)).toBe("…arbazqux");
  });
  test("origin:foobarbazqux ellipsis: '-'", () => {
    expect(textEllipsisStart("foobarbazqux", 8, "-")).toBe("-arbazqux");
  });
  test("origin:foobarbazqux length:7 rear_longer: true'", () => {
    expect(textEllipsisStart("foobarbazqux", 7)).toBe("…rbazqux");
  });
});

describe("textEllipsisEnd", () => {
  test("origin:foobarbazqux length:8", () => {
    expect(textEllipsisEnd("foobarbazqux", 8)).toBe("foobarba…");
  });
  test("origin:foobarbazqux ellipsis: '-'", () => {
    expect(textEllipsisEnd("foobarbazqux", 8, "-")).toBe("foobarba-");
  });
  test("origin:foobarbazqux length:7 rear_longer: true'", () => {
    expect(textEllipsisEnd("foobarbazqux", 7)).toBe("foobarb…");
  });
});
