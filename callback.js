// setTimeout(() => {
//     console.log("2 seconds are up!");
// }, 2000);



// const names = ['Snehomoy', 'Rupomoy', 'Soumya'];

// const eachName = names.filter((name) => {
//     console.log(name.length <= 4);
// });


const geoCoding = (address, callback) => {
    setTimeout(() => {
        const data = {
            lattitude: 0,
            longitude: 0
        };
    
        callback(data);
    }, 2000);
}


const data = geoCoding('Mumbai', (data) => {
    console.log(data);
});

