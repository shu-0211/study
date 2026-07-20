
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

/*
// 6번

let html = '   '
let score = prompt("점수를 입력하시오");

let grade = (score > 90) ? 'A' : (score >= 80) ? 'B' : 'C'
html += `<h2> ${grade}</h2>`

document.querySelector("body").innerHTML = html

*/


/*
// 7번
let age = prompt("나이를 입력하세요");
( (age >= 20) && (age <= 29) ) ? console.log('이벤트 대상입니다.') : console.log('이벤트 대상이 아닙니다.')

*/

/*
// 8번
let likeCount = 3
likeCount++
console.log("좋아요 :["+likeCount+"]")
*/


/*
// 9번 
let todoList = ['장보기' , '과제하기'];
let 할일 = prompt("할일을입력하시오");
todoList.push(할일)
console.log(todoList)
*/

/*
// 10번
let waitingList = ['김민준' , '이서연' , '박도윤' , '최지우'];
console.log('마지막 대기자는 ['+waitingList[waitingList.length-1] + '] 입니다.')

*/