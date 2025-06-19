// 1. 

function multipleNumbers(a, b) {
    console.log(a * b)
}
multipleNumbers(3, 4)
multipleNumbers(3, 2)

// 2. 
//Cach 1:
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    console.log(min);
}
findMin(87, 12, 2)

// cach 2:
function findMinx(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
findMinx(4, 4, 1)


// 3. 
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let student of students) {
        if (student.score >= threshold) {
            topStudents.push(student.name)
        }
    }
    return topStudents;
}
let students = [
    { name: "Nhu", score: 8 },
    { name: "Kaly", score: 9 },
    { name: "Lyly", score: 3 },
    { name: "Zazy", score: 10 }
];
let topStudents = getTopStudents(students, 7);
console.log(topStudents);

// 4. 
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100
    console.log(total)
}
let totalamount = calculateInterest(100, 0.05, 2)
let totalamountx = calculateInterest(332, 0.05, 4)