const btns = document.querySelectorAll(".btn-class");

let clickMe = 0;
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        clickMe++;
        this.innerText = "Click me!" + clickMe;
    };
}

function sum2(a, b) {
    return a + b;
}

function Test(a, b, c, callback) {
    return callback(a, b) + c
}

console.log(Test(1, 2, 3, sum2));

// querySelector
// for
// const, let
// onclick
//
