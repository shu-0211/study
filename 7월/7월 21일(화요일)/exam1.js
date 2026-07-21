console.log( document)

const div = document.querySelector( 'div' )
console.log(div)
const box2 = document.querySelector( '.box2' )
console.log(box2)
const box3 = document.querySelector( '#box3' )
console.log(box3)


const divList = document.querySelectorAll( 'div' )
console.log(divList)

// [3] 가져온 DOM마크업 객체에 속성
const divHTML = div.innerHTML
console.log(divHTML)
div.innerHTML = "상자1"
// [4] 입력받은 값 가져오는 속성
const name = document.querySelector('.name')
const value = name.value
console.log( value)
name.value = "제목입력해!"

//[5] 함수활용 : 입력받은값 함수내 가져오기 
function 등록함수( ){
    //특정한 마크업 DOM 가져오기 
    const 입력마크업 = document.querySelector('.title')

    // 2. 가져온 마크업 DOM 에서 value 속성 가져오기
    const 입력받은값 = 입력마크업.value;
    // 3. 특정한 위치에 출력 
    box2.innerHTML = 입력받은값

}

// [6] css 활용
// 특정한 마크업 DOM 가져오기 
const 제목마크업 = document.querySelector('.title2')
제목마크업.style = "color : red; font-size : 5px"