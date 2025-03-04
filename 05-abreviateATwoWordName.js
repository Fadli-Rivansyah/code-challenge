const abbrevName = (name) => {
    const word = name.split(" ").map( item => {
        return item[0].toUpperCase();
    }).toString().replace(",", ".");
    return word;
}
console.log(abbrevName('ulqViqXGyKGoBAKX rNXIgKw'))