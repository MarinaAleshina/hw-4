// const slids = document.querySelectorAll(".slider-items"),
//   buttonNext = document.querySelector(".next"),
//   buttonPrev = document.querySelector(".prev"),
//   dot = document.querySelectorAll(".dot"),
//   pagination = document.querySelectorAll(".pagination");

// let currentPos = 1;

// showSlider(currentPos);

// function showSlider(num) {
//   if (num < 1) {
//     currentPos = slids.length;
//   } else if (num > slids.length) {
//     currentPos = 1;
//   }

//   for (let i = 0; i < slids.length; i++) {
//     slids[i].classList.remove("js-active-slide");
//   }
//   for (let i = 0; i < dot.length; i++) {
//     dot[i].classList.remove("js-active-dot");
//   }

//   slids[currentPos - 1].classList.add("js-active-slide");
//   dot[currentPos - 1].classList.add("js-active-dot");
// }

// function moveSlide(num) {
//   showSlider((currentPos += num));
// }

// buttonNext.onclick = function() {
//   moveSlide(1);
// };

// buttonPrev.onclick = function() {
//   moveSlide(-1);
// };

// dot.forEach(
//   (elem, index) =>
//     (elem.onclick = () => {
//       showSlider((currentPos = index + 1));
//     })
// );

// const slides = document.querySelectorAll(".slide"),
//   buttonPrev = document.querySelector(".prev"),
//   buttonNext = document.querySelector(".next"),
//   dots = document.querySelectorAll(".dot"),
//   box = document.querySelector(".container");

// console.log(slides);

// let sliderWidth = document.querySelector(".slides").offsetWidth;
// let widthArr = [0];
// let lineWidth = 0;
// for (let i = 0; i < slides.length; i++) {
//   widthArr.push(slides[i].offsetWidth);
//   lineWidth += slides[i].offsetWidth;
// }
// console.log(lineWidth);

// box.style.width = lineWidth + "px";

// let offset = 0;
// let currentsPos = 0;

// buttonPrev.onclick = function(el) {};
// let sum = 0;
// function foo(a) {
//   sum = 5;
//   sum += a;
//   console.log(`local: ${sum}`);
//   return sum;
// }
// foo(2);

// let res = sum;

// console.log(res);
// let users = [
//   {
//     _id: "5d1c3860aa841704d3245513",
//     isActive: false,
//     balance: 2764.35,
//     age: 33,
//     name: "Allie Blair",
//     gender: "female",
//     company: "PHOTOBIN",
//     email: "allieblair@photobin.com",
//     phone: "+1 (951) 566-2987",
//     registered: "2018-11-30T02:29:00 -02:00"
//   },
//   {
//     _id: "5d1c386095ffb689687f2db9",
//     isActive: false,
//     balance: 3276.25,
//     age: 22,
//     name: "Yesenia Leblanc",
//     gender: "female",
//     company: "SKINSERVE",
//     email: "yesenialeblanc@skinserve.com",
//     phone: "+1 (947) 446-2840",
//     registered: "2015-10-31T01:10:31 -02:00"
//   },
//   {
//     _id: "5d1c3860e73ff2a338722e81",
//     isActive: true,
//     balance: 1868.65,
//     age: 38,
//     name: "Mamie Kramer",
//     gender: "female",
//     company: "EARBANG",
//     email: "mamiekramer@earbang.com",
//     phone: "+1 (885) 564-3305",
//     registered: "2014-06-03T09:36:40 -03:00"
//   },
//   {
//     _id: "5d1c386000e4f2fc62be1b1e",
//     isActive: true,
//     balance: 1003.15,
//     age: 32,
//     name: "Crawford Bryant",
//     gender: "male",
//     company: "DIGIRANG",
//     email: "crawfordbryant@digirang.com",
//     phone: "+1 (889) 408-2141",
//     registered: "2015-01-15T05:20:21 -02:00"
//   },
//   {
//     _id: "5d1c386008ff236a315d638b",
//     isActive: false,
//     balance: 3045.41,
//     age: 36,
//     name: "Helene Holland",
//     gender: "female",
//     company: "HYDROCOM",
//     email: "heleneholland@hydrocom.com",
//     phone: "+1 (937) 554-2040",
//     registered: "2014-09-15T08:22:59 -03:00"
//   },
//   {
//     _id: "5d1c3860b4c27c4d5fdb6c1f",
//     isActive: true,
//     balance: 1693.51,
//     age: 23,
//     name: "Hernandez Osborn",
//     gender: "male",
//     company: "TERRASYS",
//     email: "hernandezosborn@terrasys.com",
//     phone: "+1 (965) 595-3942",
//     registered: "2016-08-06T12:19:01 -03:00"
//   }
// ];

// function funcGetUsers(a, key, value) {
//   let newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     for (const key in a[i]) {
//       if (a[i].hasOwnProperty(key)) {
//         if (key === "email" && key === "name" && key === "age") {
//           console.log(a[i][key]);
//         }
//       }
//     }
//   }
//   return a;
// }

// let res = funcGetUsers("age", "email", "name");
// console.log(res);
