const btnSubmit = document.querySelector(".box__btn-submit");
const imgs = document.querySelectorAll(".box__dice img");
const inp = document.querySelector(".input-guess");

function getRandom() { 
    return Math.floor(Math.random() * 6) + 1;
}

function getRandoms() {
    const arrRandom = [];
    for (let i = 0; i < 3; i++) {
        arrRandom.push(getRandom());
    }
    return arrRandom
}

btnSubmit.onclick = function (e) { 
    // lấy dữ liệu của input
    const value = inp.value

    // random xúc xắc
    const randomList = getRandoms()
    console.log(randomList);
    
    // xử lí hình
    imgs.forEach((item, index) => { 
        item.src = `./assets/img/${randomList[index]}.png`;
    })

    // xử lý điểm
}

