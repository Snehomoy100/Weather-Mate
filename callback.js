setTimeout(() => {
    console.log("2 seconds are up!");
}, 2000);



const names = ['Snehomoy', 'Rupomoy', 'Soumya'];

const eachName = names.filter((name) => {
    console.log(name.length <= 4);
});

