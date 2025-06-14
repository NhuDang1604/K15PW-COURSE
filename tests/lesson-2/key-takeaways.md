# Version Control System
Hệ thống quản lý các phiên bản version code

Local: lưu ở máy cá nhân

Centralized: lưu ở một máy chủ tập trung

Distributed: lưu ở nhiều máy khác nhau

# Git
Git - three states: 

Khi tạo mới file nó thuộc vùng nào? ko nằm vùng nào cả vì thư  mục chưa được git quản lý

git init : dùng để khởi tạo 3 vùng thuộc quản lý của git 

working directory - staging (git add . / git add filename-) - repositori (git commit -m “choore add file” 

git init: khởi tạo , cấp quyền cho git quản lý thư mục

$ git config --global init.defaultBranch <name>

tạo file > git add > git commit -m “message”

<type>:<short_description> đặt tên msg rõ ràng quy chuẩn
# Javascript
Run File (Bash Window): node tenfile.js e.g,
$ node lesson-02/04-comparision.js
1. Print

**console.log("hello world");**

2. Variable

**var firstname = "PL"**

**let lastname = "automation"**


console.log(firstname,lastname)

firstname = "Lesson2" //ko can them var hay let vi dang thay doi gia tri cua bien, gan lai gia tri bien

console.log(firstname, lastname)

3. constant: hang so, gia tri khong the thay doi duoc

const firstn = "playwright";

firstn = "cypress" (ko duoc)

let name = "Nhu";

let isLearningPlaywright = true;

let price = 200;

4. For

**for (khoi tao, dieu kien dung, dieu kien tang)**

for (let i = 1; i < 8; i++) {

    console.log(i);
}
