function palindrome(string) {
  const arrayString = string.split('');
  const reversedArrayString = arrayString.reverse();
  const reversedString = reversedArrayString.join('');
  return reversedString === string ? true : false;
}

console.log(palindrome('osobaboso'));
console.log(palindrome('hannah'));
console.log(palindrome('Hola mundo'));
