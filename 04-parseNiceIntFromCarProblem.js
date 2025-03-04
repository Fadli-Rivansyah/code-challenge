const getAge = age => {
  const result = age.at(0);  
  return parseInt(result);
}
console.log(getAge('5 years old'));