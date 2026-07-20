
/*
// 1번
let 밑변 = prompt("삼각형의 밑변을 입력하시오")
let 높이 = prompt("삼각형의 높이를 입력하시오")

console.log(밑변 * 높이 / 2)

*/


/*
//2번
let 섭씨 = prompt("섭씨 온도를 입력하시오")
console.log((섭씨 * 9 / 5) + 32)

*/


/*
//3번
let 년도 = prompt("태어난 연도를 입력하시오")
console.log("현재 나이 : " + (2026-년도 +1))

*/


/*
//4번
let cm = prompt("키를 입력하시오")
let kg = prompt("몸무게를 입력하시오")

console.log( kg / ((cm / 100) * (cm / 100)))

*/


/*
// 5번 

let id = prompt("id를 입력하세요")
let mail = prompt("이메일을 입력하세요");

(id == "admin" || mail == "admin@test.com") ? console.log('관리자') : console.log('일반 사용자')

*/


// 6번

let html = '   '
let score = prompt("점수를 입력하시오");

let grade = (score > 90) ? 'A' : (score >= 80) ? 'B' : 'C'
html += `<h2> ${grade}</h2>`

document.querySelector("body").innerHTML = html