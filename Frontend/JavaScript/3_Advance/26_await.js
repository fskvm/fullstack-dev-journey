//*        Async function - It allows you to write asynchronous code in a more readable and manageable way,
//*                        using the `await` keyword to pause execution of its surrounding async function until a Promise is settled(resolved or rejected) rather than using traditional callback functions or `.then()` or `.catch()` methods.

function getRandomNum(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve(num);
        },1000);
    });
}

async function demo(){
    await getRandomNum();
    await getRandomNum();
    await getRandomNum();
}
demo();

//? let use this concept for our color changing example
let h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            if(num > 3){
                rej("Promise Rejected");
            }
            h1.style.color = color;
            console.log(`Color changed to ${color}`);
            res("Color changes")
        },1000);
    });
}

async function changeColorAsync(color, delay) {
//! Handling the promise rejection using a try-catch block. If we don't handle it, an error will be thrown, and the remaining code (outside the promise) will not execute. For example, adding two numbers after the promise won't work in such cases.
    try {
        await changeColor('red', 1500);
        await changeColor('orange', 1500);
        await changeColor('yellow', 5000);
        await changeColor('green', 1000);

    } catch(err){
        console.log(`Error caught: ${err}`);
    }

    //! we are Performing some other operations after the color changes
    let a = 5;
    console.log(a);
    console.log(`new answer is ${a + 5}`);
}
changeColorAsync();