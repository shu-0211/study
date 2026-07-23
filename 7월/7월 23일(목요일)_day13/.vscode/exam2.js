// new URLSearchParams ( location.href ) : 현재 주소상 위치 반환
// [1] JS 예시 URL  정보 객체 호출
let url = new URLSearchParams ( location.search) ;
console.log(url)

let name = url.get('name')
console.log( name )

// [2] 페이지 이동하는 방법
// <a href=" 웹주소"> 링크 </>

let pcode = url.get('pcode');
let page = url.get('page');
console.log(pcode,page)

// 2) location.href = "웹 주소"
function 링크함수(){
    location.href = "exam2.html?name=강호동"
}

/*
    인터벌 : 특정한 주기에 따라 코드를 반복 실행
        -사용법
            setInterval(함수명)
            * 함수명에 ( ) 소괄호 넣지 말자
            -> 주기 : 밀리초 ( 1/1000초) 1000 넣으면 1초
*/
let value = 0;
function 증가함수 (){
    value += 1
    document.querySelector('#box1').innerHTML = value
}
setInterval ( 증가함수 , 1000)

function 시계함수 ( ){
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()
    let time = `${hour} : ${minute} : ${second < 10 ? "0"+second : second}`
    document.querySelector('#box2').innerHTML = time
}
setInterval( 시계함수 , 1000)



// [인터벌 시작 종료]
let time = 0    // 초 저장하는 변수
let timeInter;  // 인터벌 저장하는 변수
function 타이머시작(){
    timeInter = setInterval(타이머함수 , 1000)
} 
function 타이머함수(){
    time++;
    document.querySelector('#box3').innerHTML = time;
}
function 타이머종료(){
    clearInterval(timeInter)
}