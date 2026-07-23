console.log(localStorage)
console.log(sessionStorage)

sessionStorage.setItem('name' , '유재석')



// [1] 웹 스토리지 객체 호출 
console.log( localStorage )     
console.log( sessionStorage )   

// [2] 웹 스토리지 객체 내 자료 추가 .setItem( 'key' , value ) 
sessionStorage.setItem( 'name' , '유재석' )
// 개발자도구[F12] --> [APPLICATION] -> [왼쪽메뉴] -> 세션스토리지 -> 도메인(주소) 클릭
localStorage.setItem( 'age' , 40 )

// [3] 웹 스토리지 객체 내 자료 호출 .getItem( 'key' )
let name = sessionStorage.getItem( 'name' ); console.log( name )
let age = localStorage.getItem( 'age' ); console.log( age )

// [4] 웹 스토리지 객체 내 자료 삭제 , .removeItem( 'key' ) , .clear( )
sessionStorage.removeItem( 'name' ) // 특정한 key가 존재하면 key/value 삭제// 개발자도구 삭제 결과 확인 
// localStorage.clear() // 모든 key 삭제 

// [*] 웹 스토리지도 문자열만 지원 *타입변환 필요* ,
// [5] JSON(자바스크립트객체) , 
// JSON.stringify( 객체 ) : 객체 타입 --> 문자 타입 변환 
sessionStorage.setItem( '회원객체' , JSON.stringify( { 'name' : '유재석' , 'age' : 40 } ) )
// JSON.parse( 문자열 ) : 문자열 타입 --> 객체 타입 변환 
let 회원객체 = JSON.parse( sessionStorage.getItem( '회원객체' ) )
console.log( 회원객체 )