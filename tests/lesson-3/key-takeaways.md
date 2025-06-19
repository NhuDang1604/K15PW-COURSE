Day 3:
**thay đổi commit message**
git commit --amend - type i
git commit --amend -m"message"

**Undo actions:** đưa file từ vùng staging về directory: git restore —staged <file>

thay đổi commit message only: git commit  - -amend -m “chore: update commit msg”

đưa từ vùng staging về working directory / đưa từ vùng repo về working directory: git reset head~1

cách undo commit :

git reset head~1

Tạo nhánh riêng để làm việc

git brand <tên nhánh>

git check out <tên nhánh>

có thể gộp 2 câu trên: git check out -b <tên brand>

.gitignore file : đưa vào những file mà ko muốn git track được
-----JAVASCRIPT-------
**Logical && and || or**

let a = true;
let b = false;

if (a || b) {
    console.log("print");
}
**Object**
let user = {
    "name": "Alex",
    "age": 10,
    "email": "nhu.dd16@gmail.com"
}
const product = {
    "name": "Laptop",
    "price": 500,
    "isWindow": true,
    "manufacturer": {
        "name": "Acer",
        "year": 2024
    }
}
console.log("name =", product.name)
console.log("name =", product.price)
console.log("manufacturername", product.manufacturer.name);
product.price = 800
console.log("gia cua product price", product.price)

**function**
const { emit } = require("process");

// console.log("hello");
// console.log("hello Thai");
// console.log("hello Nhu");
// goi nhieu lan qua > dua 3 dong nay vao 1 cai ham function
// function printHelloMember(name) {
//      console.log("hello",name)
// }
// printHelloMember("Thai");

const helloName = ["nhu", "mai", "tu", "toan"];

function printHelloMember(name) {
    console.log("Hello", name);
}

for (let i = 0; i < helloName.length; i++) {
    printHelloMember(helloName[i]);
}
**arr**
const array = [1,2,3,4,5];
const str = ["nhu","mai","tu","toan"];
console.log (array.length);
console.log (array[0]);
let className = "K1";
let className2= "K2";
let className3= "K3";
let classNameArr = ["K1", "K2", "K3"];
