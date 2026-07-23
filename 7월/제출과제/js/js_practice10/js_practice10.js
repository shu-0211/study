/* 
• 3. 데이터 관리
○ 저장소: 모든 회원 정보는 브라우저의 localStorage 를 사용
○ 데이터 구조: 회원 목록은 객체(Object)를 담는 배열(Array) 형태로 관리합니다.
■ 이 배열 전체는 JSON.stringify()를 통해 문자열로 변환된 후, 
localStorage에'memberList'라는 키(key)로 저장되어야 합니다.
*/
// 각 회원 객체는 {'no' : 회원번호, 'id' : 아이디, 'pw' : 비밀번호 } 형태

// =================================================================
// [1] 웹 스토리지 객체 호출 

// let 회원객체 = {'no' : 회원번호, 'id' : 아이디, 'pw' : 비밀번호 };

function signup(){
    
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;

    console.log(localStorage)
    let memberList = JSON.parse(localStorage.getItem('memberList'))  // 아무것도 없으면 null
    console.log( memberList )

    if(memberList == null){
        memberList = [ ]
    }
    let no = memberList.length == 0 ? 1 : memberList[memberList.length -1].no+1
    let obj = { no , id , pw }
    memberList.push(obj) ;  console.log(memberList)

    alert('등록')

    localStorage.setItem('memberList',JSON.stringify(memberList))

}

function login(){
    // [1] 입력된 아이디와 비번을 입력받기
    let id = document.querySelector('.loginId').value;
    let pw = document.querySelector('.loginPw').value;
    // [2] memberList 배열 내의 어떤 회원 객체의 id pw 값과 비교 후 일치하면
    let memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList == null){return;}

    for(i = 0 ; i < memberList.length ; i++){
        if(memberList[i].id == id && memberList[i].pw == pw){
            alert('로그인 성공');
            return;
        }
    }
    // [3] 로그인 성공 알림창 띄우고 함수 즉시 종료
    

    
    //찾지 못하면 "동일한 회원정보가 없습니다. 로그인실패" 알림창띄우기

}