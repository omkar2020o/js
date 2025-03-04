/**
 * Promises 
 * the promise object represent the eventual completion 
 * (or failure) of an asynchronous operatio and its resulting value
 */

// function saveDB(data, succes, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (internetSpeed > 4) {
//         succes();
//     } else {
//         failure();
//     }
// }

// saveDB(
//     "Omkar",
//     () => {
//         console.log("ypur data succesfuylly saved");
//         saveDB("hello world", () => {
//             console.log("success2: data2 saved");
//         }, () => {
//             console.log("failure2: Weak connection");
//         });
//         saveDB("hello world", () => {
//             console.log("success2: data2 saved");
//         }, () => {
//             console.log("failure2: Weak connection");
//         });
//     },
//     () => {
//         console.log("weak connection try again with good connection");
//     });



function saveDB(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("fail: something occur wrong ");
        }
    })
}

saveDB("omkar suryawasnshi")
    .then((result) => {
        console.log("data 1: promise got full fill");
        console.log(result);
        return saveDB("diksha kale");
        
    })
    .then((result)=>{
        console.log("data 2: saved ")
        console.log(result);
        return saveDB("diksha kale");
    })
    .then((result)=>{
        console.log("data 3: saved ")
        console.log(result);
    })

    .catch((error) => {
        console.log("promise was rejected");
        console.log(error);
    });