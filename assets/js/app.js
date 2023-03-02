const myString = "Hello World!";

// console.log(myString);

// length
// console.log(myString.length)

// indexOf
// console.log(myString.indexOf('H', 5))

// search
// console.log(myString.search('o'))

// slice
// console.log(myString.slice(2, 8))

// replace
// console.log(myString.replace("lll", "LL"));

// toUpperCase
// console.log(myString.toUpperCase())

// toLowerCase
// console.log(myString.toLowerCase())

// split
// console.log('02-03-2023'.split('-')[0])

const number = 2000.503872764;

// toFixed
// console.log(number.toFixed(3));

// parseInt
// console.log(parseInt(number));

// parseFloat
// console.log(parseFloat(number));

const arr = [
    "Seminar IOT",
    "Tester Seminar Fullstack",
    "Big Data Seminar IOT 2",
];

// length
// console.log(arr.length)

// pop
// console.log(arr.pop())
// console.log(arr.pop());
// console.log(arr)

// push
// console.log(arr.push('20'))
// console.log(arr.push("20"));
// console.log(arr)

// shift
// console.log(arr.shift())
// console.log(arr.shift());
// console.log(arr)

// unshift
// console.log(arr.unshift('20'))
// console.log(arr.unshift("20"));
// console.log(arr)

// join
// console.log(arr.join(' - '))

// for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// forEach
// arr.forEach(function (item, index) {
//     console.log(item, index);
// });

// for of
// for in

// find
// const data = arr.find(function (item, index) {
//     return item == 4;
// });

// function find2(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] == value) {
//             return arr[i];
//         }
//     }
//     return undefined;
// }

// filter
// const dataSearch = "IOT";
// const data = arr.filter(function (item, index) {
//     return item.indexOf(dataSearch) == -1 ? false : true;
// });

// console.log(data);

// object
// const userA = {
//     name: "Nguyễn Văn A",
//     sdt: "0121293414",
//     address: "asdjhggashjdgashjdghasj"
// }

// console.log(userA.sdt);

const list = document.querySelector(".list");

console.log(list);

const data = [
    {
        title: "Dép bánh mì nam nữ đế cao 5cm, dép quai ngang chất liệu Eva cao cấp",
        src: "https://cf.shopee.vn/file/c7bcc01b8c8a81a6a111474468162d8a_tn",
    },
    {
        title: "Loa bluetooth mini không dây,nghe nhạc,giá rẻ,công nghệ blutooth 5.0 BINTECH",
        src: "https://cf.shopee.vn/file/e66cc386528d8c5119b59cd20ccacc22_tn",
    },
    {
        title: "Tai nghe bluetooth MINPRO M10 PRO, tai nghe không dây nghe nhạc chơi game công nghệ bluetooth 5.0",
        src: "https://cf.shopee.vn/file/sg-11134201-22110-jd4256iuf9jvf6_tn",
    },
    {
        title: "Váy Nữ Buộc Cổ Khóa Lưng Dáng Ngắn Ngang Đùi 2 Màu Đen, Đầm Dự Tiệc Cực Xinh",
        src: "https://cf.shopee.vn/file/360b4be695501be29659f3cdc35d63da_tn",
    },
    {
        title: "Dép Sục Hà Mã Mắt To Dễ Thương Hot Trend",
        src: "https://cf.shopee.vn/file/sg-11134201-22110-5co0i2evafkve8_tn",
    },
    {
        title: "Áo phông form rộng tay lỡ Hadez hình chữ H unisex",
        src: "https://cf.shopee.vn/file/sg-11134201-22090-suwtr6yu1vhvd6_tn",
    },
    {
        title: "Tai nghe chụp tai không dây bluetooth STN28 màu sắc cute,âm thanh ấm bass mạnh- Phụ Kiện 123",
        src: "https://cf.shopee.vn/file/f2f227a59f6a5fb1eb1dc2893057aeab_tn",
    },
    {
        title: "Áo Khoác Cardigan Kẻ Thoi Form Rộng Đen/ Hồng Chất Nỉ New",
        src: "https://cf.shopee.vn/file/sg-11134201-22100-9yezc7g76siv15_tn",
    },
    {
        title: "Dép lông con sóc siêu cute xả khokho85k-85k sập giá",
        src: "https://cf.shopee.vn/file/sg-11134201-22100-uqpp5h6xreiv8a_tn",
    },
    {
        title: "Áo Khoác Nỉ Bông Thêu Hoodie Zip Unisex Nam Nữ Thời Trang Phong Cách Hàn Quốc(Hàng Sẵn)",
        src: "https://cf.shopee.vn/file/fd69f61704c6ae68199b7c1c8cad8f3c_tn",
    },
    {
        title: "Dép Sục Cross Đế Bánh Mì Tăng Chiều Cao Đính Sticker 2D",
        src: "https://cf.shopee.vn/file/sg-11134201-22090-ioy1ubnmjxhv72_tn",
    },
    {
        title: "Áo thun Outerity Signature Trắng ver2.0- Lisa offical( V405)",
        src: "https://cf.shopee.vn/file/sg-11134201-23010-pdpnzmvxtulvcd_tn",
    },
    {
        title: "Loa bluetooth mini không dây nghe nhạc, cắm usb thẻ nhớ đa năng có đèn led chính hãng - MINPRO",
        src: "https://cf.shopee.vn/file/6cbf33b1074174ec070c722bf29f81c5_tn",
    },
    {
        title: "Áo Khoác Cardigan Viền Xanh Nâu FRMLK Form Rộng chew",
        src: "https://cf.shopee.vn/file/sg-11134201-22110-ip926m6el6jvad_tn",
    },
    {
        title: "Dép Bông nữ hình sóc nhe răng ngộ nghĩnh xả kho 85k",
        src: "https://cf.shopee.vn/file/sg-11134201-22100-58y61txk7piv3d_tn",
    },
];

let htmls = '';

const items = data.forEach(function (item) {
    const html = `
        <li class="item">
            <img src="${item.src}" alt="">
            <p>${item.title}</p>
        </li>
    `;

    htmls += html
});

list.innerHTML = htmls
