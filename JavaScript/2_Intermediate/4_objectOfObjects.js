//* Nested Objects or Object of Objects

const classInfo = {
    Akhtar: {
        age: 25,
        grade: 'A',
    },
    Fatima: {
        age: 22,
        grade: 'B',
    },
    Ali: {
        age: 23,
        grade: 'A',
    }
}

console.log(classInfo.Akhtar); // Output: { age: 25, grade: 'A' }
console.log(classInfo.Fatima.age); // Output: 22

classInfo.Fatima.gender = 'Female';
console.log(classInfo.Fatima); // Output: { age: 22, grade: 'B', gender: 'Female' }

console.log(classInfo['Ali'].grade); // Output: 'A'