import { getEffectAB } from "../src/";

test("no effect", () => {
  const result = getEffectAB(0, 0);
  expect(result).toBe(0);
});

test("positive effect", () => {
  const result = getEffectAB(100005, 100007);
  expect(result).toBeGreaterThan(0);
});

test("negative effect", () => {
  const result = getEffectAB(100007, 100005);
  expect(result).toBeLessThanOrEqual(0);
});
