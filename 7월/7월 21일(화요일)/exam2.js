/*
// 예제 1
const title = document.querySelector('#title')
title.innerHTML = "DOM 조작성공!"

document.querySelector('#title').innerHTML = "DOM 조작성공!"
*/

/*
//예제  2

function 작성함수( ){
    // 1. 특정한 DOM 마크업 가져오기
    const 입력마크업 = document.querySelector('#usernameInput')
    // 2. 가져온 DOM 마크업에서 value 속성 가져오기 
    const 입력값 = 입력마크업.value
    // 3. 출력할 특정한 dom에 출력하기 
    document.querySelector('#greeting').innerHTML = 입력값
}
*/

/*
// 예제 3
function 색상변경함수(){
    // 1. 특정한 마크업 DOM가져오기 
    let 마크업 = document.querySelector('#colorBox')
    // 2. 가져온 마크업DOM에서 style속성 대입
    마크업.style = "background=color: 'skyblue" ;color:'while';



    마크업.style.backgroundColor = 'skyblue'
    마크업.style.color = 'white'
}   
*/

/*
// 예제 4
function 토글함수(){
    let 마크업 = document.querySelector('body')
    // 2. 가져온 마크업 DOM에서 토글
    //  .classList : 클래스 요소 목록 반환
    //  .classList.toggle ('클래스명 ') : 클래스 목록에 특성 클래스명 대입 / 삭제

    마크업.classList.toggle('dark-mode')
}
*/


/*
// 예제 5
function 삭제함수(){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업  = document.querySelector('#targetBox')
    // 2. 가져온 마크업 삭제하기 , remove()
    마크업.remove()
}
*/

/*
fontweight = 'bold' 적용 잘 안됨 
// 예제 6
// 1. 특정한 (여러개) 마크업 DOM가져오기 
let 마크업배열 = document.querySelectorAll('.item')

// 2. 가져온 여러개 마크업들을 반복하기 
for( i = 0 ; i < 마크업배열.length ; i++ ){
    let 아이템 = 마크업배열[i]
    아이템.style.color = 'green'
    아이템.style.fontWeight = 'bold'
    // 카멜 표기법 vs css 표기법
    //아이템.style = 'font-wight : bold;'

}

*/


/*
//예제 7번 

function 이미지변경함수 (){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('#mainImage')
    // 2. 가져온 마크업에 src 속성 대입하기
    마크업.src = 'https://placehold.co/600x400/red/white'
}
*/

/*
// 예제 8
function 목록선택함수(){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('select')
    // 2. 가져온 마크업에 선택한 value 가져오기 
    let 선택값 = 마크업.value;
    console.log( 선택값 )
}
*/

let 배열  = [];

function 저장함수(){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('#input')
    // 2. 가져온 마크업 DOM 의 value  속성 값 가져오기 
    let 입력값 = 마크업.value;
    // 3. 전역배열에 추가 push
    배열.push(입력값)

    // 4. 출력
    document.querySelector('#pp').innerHTML = 배열
    console.log(배열)
}