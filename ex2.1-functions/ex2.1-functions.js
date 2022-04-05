function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
}

let country1 = describeCountry("Scotland", 5.5, "Edinburgh");
let country2 = describeCountry("Spain", 47.5, "Madrid");
let country3 = describeCountry("Japan", 125.4, "Tokyo");

console.log(country1);
console.log(country2);
console.log(country3);
