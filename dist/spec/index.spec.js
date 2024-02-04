"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const __1 = require("..");
(0, globals_1.describe)("preProcess", () => {
    (0, globals_1.test)("origin:foobarbazqux length:0", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 0)).toBe(undefined);
    });
    (0, globals_1.test)("origin:'' length:0", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("", 8)).toBe(undefined);
    });
    (0, globals_1.test)("origin:foobar length:8", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobar", 8)).toBe("foobar");
    });
});
(0, globals_1.describe)("textEllipsisMiddle", () => {
    (0, globals_1.test)("origin:foobarbazqux length:8", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 8)).toBe("foob…zqux");
    });
    (0, globals_1.test)("origin:foobarbazqux length:7", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 7)).toBe("foob…qux");
    });
    (0, globals_1.test)("origin:foobarbazqux length:7 ellipsis: '-'", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 7, "-")).toBe("foob-qux");
    });
    (0, globals_1.test)("origin:foobarbazqux length:7, ellipsis: undefined, rear_longer: true", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 7, undefined, true)).toBe("foo…zqux");
    });
    (0, globals_1.test)("origin:foobarbazqux length:1", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 1)).toBe("f…");
    });
    (0, globals_1.test)("origin:foobarbazqux length:1, ellipsis: undefined, rear_longer: true", () => {
        (0, globals_1.expect)((0, __1.textEllipsisMiddle)("foobarbazqux", 1, undefined, true)).toBe("…x");
    });
});
(0, globals_1.describe)("textEllipsisStart", () => {
    (0, globals_1.test)("origin:foobarbazqux length:8", () => {
        (0, globals_1.expect)((0, __1.textEllipsisStart)("foobarbazqux", 8)).toBe("…arbazqux");
    });
    (0, globals_1.test)("origin:foobarbazqux ellipsis: '-'", () => {
        (0, globals_1.expect)((0, __1.textEllipsisStart)("foobarbazqux", 8, "-")).toBe("-arbazqux");
    });
    (0, globals_1.test)("origin:foobarbazqux length:7 rear_longer: true'", () => {
        (0, globals_1.expect)((0, __1.textEllipsisStart)("foobarbazqux", 7)).toBe("…rbazqux");
    });
});
(0, globals_1.describe)("textEllipsisEnd", () => {
    (0, globals_1.test)("origin:foobarbazqux length:8", () => {
        (0, globals_1.expect)((0, __1.textEllipsisEnd)("foobarbazqux", 8)).toBe("foobarba…");
    });
    (0, globals_1.test)("origin:foobarbazqux ellipsis: '-'", () => {
        (0, globals_1.expect)((0, __1.textEllipsisEnd)("foobarbazqux", 8, "-")).toBe("foobarba-");
    });
    (0, globals_1.test)("origin:foobarbazqux length:7 rear_longer: true'", () => {
        (0, globals_1.expect)((0, __1.textEllipsisEnd)("foobarbazqux", 7)).toBe("foobarb…");
    });
});
