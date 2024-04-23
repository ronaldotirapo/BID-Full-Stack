function stringIncludes(string, includes) {
  return string.includes(includes);
}

console.log(stringIncludes('Hola mundo', 'mundo'));
console.log(stringIncludes('HOLA MUNDO', 'MUNDO'));
console.log(stringIncludes('HOLA MUNDO', 'mundo'));
