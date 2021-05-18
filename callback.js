// setTimeout(() => {
//     console.log("2 seconds are up!");
// }, 2000);



// const names = ['Snehomoy', 'Rupomoy', 'Soumya'];

// const eachName = names.filter((name) => {
//     console.log(name.length <= 4);
// });


// const geoCoding = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             lattitude: 0,
//             longitude: 0
//         };
    
//         callback(data);
//     }, 2000);
// }


// const data = geoCoding('Mumbai', (data) => {
//     console.log(data);
// });


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;

        callback(sum);
    }, 2000);
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})