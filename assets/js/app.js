// JSON -> Chuỗi
// [], {}, string, number, boolean, null

// stringify: chuyển dữ liệu sang dạng JSON
// parse: chuyển JSON về dạng dữ liệu gốc

// const arr = [1, "2", true, { a: 1 }, function () {}];

// const JSONdata = JSON.stringify(arr);

// console.log(JSON.parse(JSONdata))

// session storage
// cookie

// local storage
// const obj = { data: "light" };
// localStorage.setItem("theme", JSON.stringify(obj));
// localStorage.setItem("theme2", JSON.stringify(obj));

// console.log(JSON.parse(localStorage.getItem("theme")));

// localStorage.removeItem("theme")
// localStorage.clear()

let theme = "light";

// thực thi hành động => theme = 'dark'

// document.querySelector("button").onclick = function () {
//     const value = document.querySelector("input").value;
//     localStorage.setItem("user", JSON.stringify(value));
// };

// falsy + truthy
// const data = false || 4 || undefined || ''
//  const data = 1 && 4 && 3 && 2;
// console.log(data)

// map
const data = [1, 2, 3];
const dataMap = data.map((item) => item * 2);

// console.log(dataMap)

// ES6

// arrow function
// function sum(a, b) {
//     return a + b;
// }

// const sumES6 = (a, b) => a + b;

// spread
// const arr = [1, 2, 3];
// const arr1 = [5, 6, 7];
// const arr2 = [...arr, 4, ...arr1];
// console.log(arr2);

// rest
// const user = {
//     username: 'a',
//     password: '123456'
//  };
// const { password, ...objRest } = user;
// console.log(objRest)

// const User = { user: '123', pass: '456' }
// const { user: user2, pass } = User
// console.log(user2)

// set
// const arr = [1, 1, 2, 3, 2, 4, 3];
// console.log([...new Set(arr)]);

// default parameter
// function myFunction(x, y = 10) {
//   return x + y;
// }
// console.log(myFunction(5));

// trim
// const string = "   jshdf djfsh jfhs    ";
// console.log(string.trim());
