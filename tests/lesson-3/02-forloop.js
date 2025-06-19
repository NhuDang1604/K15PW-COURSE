// 1. Tính tổng từ 1 đến 100.
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Tổng từ 1 đến 100 là " + sum)

// 2. In bảng cửu chương từ 2 đến 9.
let multipleofnine = 1;
for (let i = 1; i <= 10; i++) {
    multipleofnine = i * 9
    console.log(multipleofnine)

}
// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
arrNinetoNinetyNine = [];
for (let i = 1; i < 100; i++) {
    arrNinetoNinetyNine.push(i);
}
console.log(arrNinetoNinetyNine)
// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).
let user = []
for (let i = 1; i <= 10; i++) {
    console.log("nhu" + i + "@gmail.com")
}

// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu
// đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
const revenues = [
    { month: 1, total: 100 },
    { month: 2, total: 100 },
    { month: 3, total: 100 },
    { month: 4, total: 100 },
    { month: 5, total: 100 },
    { month: 6, total: 100 },
    { month: 7, total: 100 },
    { month: 8, total: 100 },
    { month: 9, total: 100 },
    { month: 10, total: 100 },
    { month: 11, total: 100 },
    { month: 12, total: 100 }
];
let totalRevenues = 0
for (let item of revenues) {

    totalRevenues += item.total;
}
console.log(totalRevenues)
