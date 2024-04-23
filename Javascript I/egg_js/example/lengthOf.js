function lengthOf(string) {
  if (string.length === 0) {
    return 'The string is empty.';
  }
  return string.length;
}

console.log(lengthOf('')); // The string is empty.
console.log(lengthOf('Hello, world!')); // 13
console.log(lengthOf('The quick brown fox jumps over the lazy dog.')); // 44
