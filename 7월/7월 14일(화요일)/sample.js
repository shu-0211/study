let 객체변수1 = { }
console.log (객체변수1) // 객체가 저장된 변수 호출

const 객체변수2 = { '속성명' : 10, '속성명2':'안녕'}
console.log(객체변수2)

console.log(객체변수2.속성명)

console.log (   ) // console 객체내 log 함수 호출 
// 소괄호가 있으면 함수 없으면 객체 속성


console.log(Object.keys(객체변수2))    // 객체내 모든 속성명(배열)출력
console.log(Object.values(객체변수2))    // 객체내 모든 속성값(배열) 출력
console.log(Object.entries(객체변수2))   //객체네 모든 속성명/값 (배열)출력

객체변수2.속성명3 = 3.14
console.log(객체변수2)
객체변수2.속성명3 = true
console.log(객체변수2)
delete 객체변수2.속성명3
console.log(객체변수2)

const 객체변수3 = {prop1:1 , prop2 : [ 1, 2, 3] , prop3 : { age : 40 } ,  prop4 : function( ) { }}

console.log(객체변수3.prop3.age)

console.log ( 'prop1' in 객체변수3) // ture