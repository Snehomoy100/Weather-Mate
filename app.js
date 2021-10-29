// basic asynchronous & non-blocking feature of nodejs

console.log("Starting");

setTimeout(() => {
    console.log("2 seconds timer");
}, 2000);

setTimeout(() => {
    console.log("0 seconds timer");
}, 0);

console.log("Stopping");