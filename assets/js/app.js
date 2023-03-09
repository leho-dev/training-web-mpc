const btnSubmit = document.querySelector(".box__btn-submit");
const imgs = document.querySelectorAll(".box__dice img");
const inp = document.querySelector(".input-guess");
const ratio = document.querySelector(".box__ratio");
const score = document.querySelector(".box__score");

function getRandom() {
    return Math.floor(Math.random() * 6) + 1;
}

function getRandoms() {
    const arrRandom = [];
    for (let i = 0; i < 3; i++) {
        arrRandom.push(getRandom());
    }
    return arrRandom;
}

function getTotalOfArr(arr) {
    let total = 0;
    arr.forEach((a) => {
        total += a;
    });
    return total;
}

let total = 0;
let count = 0;
let scoreNum = 0;
const POINT = 10;

btnSubmit.onclick = function (e) {
    // lấy dữ liệu của input
    const inpVal = inp.value;

    // điều kiện thực thi
    if (inpVal < 3 || inpVal > 18 || !inpVal) {
        alert("Đoán không hợp lệ!");
        inp.focus();
        return;
    }

    // random xúc xắc
    const randomList = getRandoms();

    // xử lí hình
    imgs.forEach((item, index) => {
        item.src = `./assets/img/${randomList[index]}.png`;
    });

    // xử lý điểm
    total++;
    const totalArr = getTotalOfArr(randomList);
    if (inpVal == totalArr) {
        count++;
        scoreNum += POINT;
    }

    // gán giá trị vào UI
    ratio.innerText = `${count} / ${total}`;
    score.innerText = `Điểm: ${scoreNum}`;
};
