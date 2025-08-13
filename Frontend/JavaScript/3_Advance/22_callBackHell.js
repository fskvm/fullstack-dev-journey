h1 = document.querySelector('h1');

//* CallBack Hell or CallBack Nesting - It occurs when you have multiple asynchronous operations that depend on the results of one another, and
//*                                     the callbacks are deeply nested within each other.

//* Problems with CallBack Hell are hard to read, maintain, and debug.
//* It can be avoided by using Promises and async/await
//* But still used in many places in the codebase, especially in older codebases.

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) //! Check if the nextColorChange is existing or likely passes to the function as a callback.
            nextColorChange();
    }, delay);
}

changeColor('red', 1000, () => {
    changeColor('orange', 1000, () => {
        changeColor('green', 1000, () => {
            changeColor('blue', 1000, () => {
                changeColor('purple', 1000, () => {
                    changeColor('pink', 1000, () => {
                        changeColor('hotpink', 1000, () => {
                            console.log('All colors changed!');
                        });
                    });
                });
            });
        });
    });
});


//? A real-world example, let's suppose we want to save the data to DB if the network is good, Otherwise we return failure unstable network to store it in DB.

function saveData(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveData('Akhtar', () => {
    console.log('Data-1 success');

    saveData('Raza', () => {
        console.log('Data-2 success');

        saveData('is a Great', () => {
            console.log('Data-3 success');

            saveData('Developer', () => {
                console.log('Data-4 success');
            }, () => {
                console.log('Data-4 failure');
            })
        }, () => {
            console.log('Data-3 failure');
        })
    }, () => {
        console.log('Data-2 failure');
    })
}, () => {
    console.log('Data-1 failure');
})