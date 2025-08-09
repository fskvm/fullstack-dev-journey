function saveData(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve(`Data saved successfully: ${data}`);
        } else {
            reject("Data not saved!");
        }
    });
}

//! there can be multiple then() but only one catch() at the end

//* Approach 1 - still it is looking like callback hell
// saveData("Akhtar")
// .then((result) => {
//     console.log("Data 1:", result);
//     saveData("Raza")
//         .then((result) => {
//             console.log("Data 2:", result);
//             saveData("is a Great")
//                 .then((result) => {
//                     console.log("Data 3:", result);
//                     saveData("Developer")
//                         .then((result) => {
//                             console.log("Data 4:", result);
//                         })
//                 })
//         })
// })
// .catch((error) => {
//     console.log("Error :", error);
// })
//     .finally(() => {
//     console.log("All operations completed.");
//     })

//* Approach 2 - using promise chaining with returning promises
saveData("Akhtar")
    .then(result => {
        console.log("Data 1:", result);
        return saveData("Raza"); //! returning will allow chaining below .then
    })
    .then(result => {
        console.log("Data 2:", result);
        return saveData("is a Great");
    })
    .then(result => {
        console.log("Data 3:", result);
        return saveData("Developer");
    })
    .then(result => {
        console.log("Data 4:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("All operations completed.");
    })


//? Reformating our old color-changing code to use promise chaining
//! As there is negligible chances to fail in this case, we are not using reject in the promise and not using catch() at the end

let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            h1.style.color = color;
            res(`Color changed to ${color}`);
        },delay);
    });
}

changeColor('red', 5000)
    .then(result => {
        console.log(result);
        return changeColor('blue', 4000);
    })
    .then(result => {
        console.log(result);
        return changeColor('green', 3000);
    })
    .then(result => {
        console.log(result);
        return changeColor('yellow', 2000);
    })
    .then(result => {
        console.log(result);
        return changeColor('orange', 1000);
    })
    .then(result => {
        console.log(result);
        return changeColor('purple', 1000);
    })
    .then(result => {
        console.log(result);
    })


