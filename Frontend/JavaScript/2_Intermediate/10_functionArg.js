//* function with arguments
//* The Order of Arguments matters that means the first argument will be assigned to the first parameter, the second argument to the second parameter, and so on.

function averageOf3(a, b, c){       //! here a, b, c are parameters that are placeholders (used in the function definition)
    let average = (a + b + c) / 3;
    console.log(average);
}

averageOf3(10, 20, 30); //! here 10, 20, 30 are arguments that are actual values passed to the function (used in function call)

function printTable(n) {
    for(let i = n; i <= n*10; i += n) {
        console.log(i);
    }
}
printTable(100);

