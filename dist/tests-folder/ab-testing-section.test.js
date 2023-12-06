"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEffectAB_1 = require("../src/functions/ab-testing/getEffectAB");
test("no effect", () => {
    const result = (0, getEffectAB_1.getEffectAB)(0, 0);
    expect(result).toBe(0);
});
test("positive effect", () => {
    const result = (0, getEffectAB_1.getEffectAB)(100005, 100007);
    expect(result).toBeGreaterThan(0);
});
test("negative effect", () => {
    const result = (0, getEffectAB_1.getEffectAB)(100007, 100005);
    expect(result).toBeLessThanOrEqual(0);
});
