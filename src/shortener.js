const CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const decode = (short) => {
  return String(short)
    .split("")
    .map((char) => CHARS.indexOf(char));
};

export const encode = (identifier) => {
  identifier = parseInt(identifier);
  if (typeof identifier != "number") return identifier

  const digits = [];
  while (identifier > 0) {
    digits.push(identifier % 62);
    identifier = parseInt(identifier / 62);
  }

  const result = digits.reverse().map((p) => CHARS.charAt(p));
  return result.join("");
};

export const shortener = (identifier) => {
  return encode(identifier);
};
