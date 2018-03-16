// Object destructuring 

// const person = {
//     name: 'Chris',
//     age: 28,
//     location: {
//         city: 'Seattle',
//         temp: 47
//     }
// };

// const { name: firstName = "anonymous", age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = "Self Published"} = book.publisher;

// console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (ice)', '$2.00', '$2.30', '$2.75'];

const [drink, , mediumCoffeePrice] = item

console.log(`A medium ${drink} costs ${mediumCoffeePrice}`)