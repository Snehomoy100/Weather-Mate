console.log("Starting");

setTimeout(() => {
    console.log("2 second timer");
}, 2000);

// node's non-blocking I/O feature.

setTimeout(() => {
    console.log("0 seconds timer");
}, 0);


console.log("Stopping");