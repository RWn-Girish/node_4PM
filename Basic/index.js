// Settimeout

// console.log("Hello");

// setTimeout(()=> {
//     console.log("Red & White")
// }, 3000);

// setInterval(()=> {
//     console.log("Red & White")
// }, 2000);

// console.log(__dirname)
// console.log(__filename)



// module => functions
// 3 types of module => 1. core (bulit-in) 2. locale 3. third-party

// http (server), fs (file handle), os (operating), path , event, url

// const custom = require("./custom");

// console.log(custom(11,33))

const {square, mul} = require("./custom");

console.log(square(22))
// console.log(mul(2, 3))
