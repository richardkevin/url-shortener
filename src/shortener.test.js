import { encode, decode } from "./shortener";

describe("Shortener", () => {
  describe("decode", () => {
    it("Should works when pass a string", () => {
      const result = decode("ab");
      expect(result).toEqual([0, 1]);
    });
    it("Should works when pass an integer", () => {
      const result = decode(9);
      expect(result).toEqual([61]);
    });
  });

  describe("encode", () => {
    it("Should return empty string when invalid parameter", () => {
      const result = encode("/");
      expect(result).toEqual("");
    });
    it("Should return empty string when NaN parameter", () => {
      const result = encode(parseInt("a"));
      expect(result).toEqual("");
    });
    it("Should works when pass a string", () => {
      const result = encode("125");
      expect(result).toEqual("cb");
    });
    it("Should works when pass an integer", () => {
      const result = encode(125);
      expect(result).toEqual("cb");
    });
  });
});
