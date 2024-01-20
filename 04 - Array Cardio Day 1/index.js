// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let table = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(`1. Filter the list of inventors for those who were born in the 1500's`);
console.table(table);
console.log(Object.prototype.toString.call(table));
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let flname = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(`2. Give us an array of the inventors first and last names`);
console.table(flname);
console.log(Array.isArray(flname));
console.log(flname instanceof Array);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sort = inventors.sort((a, b) => a.year - b.year);
console.log(`3. Sort the inventors by birthdate, oldest to youngest`);
console.table(sort);
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const lifespan = i => i.passed - i.year;
const reduce = inventors.reduce((total, next) => {
    return total + lifespan(next);
}, 0);

console.log(`4. How many years did all the inventors live all together?`);
console.table(`${reduce} years`);
// 5. Sort the inventors by years lived
const lived = i => i.passed - i.year;
let livedInv = inventors.sort((a, b) => lived(a) - lived(b));
console.log(`5. Sort the inventors by years lived`);
console.table(livedInv);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
// 7. sort Exercise
// Sort the people alphabetically by last name
const lastName = p => p.slice(0, p.indexOf(','));
// people.forEach(p => console.log(lastName(p)));
const sortedByLastName = people.sort((a, b) => lastName(a).localeCompare(lastName(b)));
console.log(`// Sort the people alphabetically by last name`);
console.table(sortedByLastName);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const sum = (prev, next) => {
    let num = 0;
    if(prev === next) {
        num++;
    }
    return num;
};

const sumUp = data.reduce((obj, next) => {
    if (!obj[next]) obj[next] = 0;
    obj[next]++;
    return obj;

}, {});

console.log(`Sum up the instances of each of these`);
console.table(sumUp);
