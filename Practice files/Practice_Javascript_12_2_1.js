// let words =['these', 'words', 'need', 'to', 'be', 'all', 'capitalized']
// let caps =words.map(word => word.toUpperCase())
// console.log(caps)

// let numbers = [1,2,3,4]
// let squared = numbers.map(numbers => numbers*numbers)
// console.log(squared)

// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);

// var numbers = [0,2,4,6,8];
// var plus5 = numbers.map(numbers => numbers+5)
// console.log(plus5);

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityPopulation = cities.map(function(city){
//     return city.population;
// });
// console.log(cityPopulation);
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];
// var cityName =cities.map(function(city){
//     return city.City;
// });
// var cityPopulation = cities.map(function(city){
//     return city.population;
// });
// console.log(cityName, cityPopulation);

// Determine even numbers
// let numbers = [13,22,36,54,55]
// let evenNumbers =[]

// numbers.forEach(function (number) {
//     if(number % 2 == 0) {
//         evenNumbers.push(number)
//     }
// })
// console.log(evenNumbers)

// easier method to determine even numbers 
// let numbers = [13,22,36,54,55]
// let evenNumbers =numbers.filter(number => number % 2 ==0)
// console.log(evenNumbers)

// larger function
// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);
// does not work for me does work for Ask BCS

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sStart = words.filter(function(letter){
    return letter.startsWith('s')
})


//map and filter simplified with an arrow
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);
// sort does the same thing
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((a,b) => a - b);
// console.log(sortedAge);
// now modified
// var familyAge = [3,2,39,37,9];
// var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
// anotherElement);
// var familyAge = [3,2,39,37,9];
// sortedAge = familyAge.sort((a,b) => b - a);

// var integers = [0,1,2,3,4,5];
// var slice1 = integers.slice(0,2);
// last 2
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );
// first 3 of array

// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(0,3);