const {readFile, writeFile} = require("fs");


// readfile('filepath', "callback", "encoding");
readFile('./content/result-sync.txt', 'utf8', (err, result) => {
    // handling errors
    if(err) {
        console.log(err);
        return;
    }
    console.log(result) 
})

writeFile('./content/result-sync.txt', 'This is just another file', (err, result) => {
    if(err) {
        console.log(err)
    }
    console.log("File writing... sucessfull")
})