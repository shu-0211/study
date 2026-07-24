// 글 선택시 글내용을 볼수있는 페이지 
// 0. 페이지 이동시 글 제목과 내용을 보여줘야됨
// 0-1 ?뒤에 no변수 숫자가 내가 선택한 페이지번호이고 
// 배열에서 같은 수 비교후 내용 가져와야됨
// 1. 삭제 버튼을 누를시 글을 삭제하고 글 목록 페이지로 이동
viewboardllist()
function viewboardllist(){

    // 선택한 페이지 주소에서 추출
    const url = new URLSearchParams(location.search)
    let select = url.get('no')
    
    // 로컬스토리지에서 boardList가져오기
    let boardList = localStorage.getItem('boardList')
    if( boardList ==  null) {boardList=[]}
    else{boardList = JSON.parse(boardList)}

    // 내가 선택한 번호 == boardList 배열 no 번호 
    for( i = 0; i < boardList.length ; i ++){
        let obj = boardList[i]
        if(select == obj.no){
            document.querySelector('#title').innerHTML = obj.title;
            document.querySelector('#content').innerHTML = obj.content;
        }
    }
    
}

function deleteboard(){

    const url = new URLSearchParams(location.search)
    let select = url.get('no')

    let boardList = localStorage.getItem('boardList')
    if( boardList ==  null) {boardList=[]}
    else{boardList = JSON.parse(boardList)}

    for( i = 0; i < boardList.length ; i ++){
        let obj = boardList[i]
        if(select == obj.no){
            let password = prompt('비번을 입력하세요')
            if(password == obj.pwd){
                boardList.splice(i,1)
                alert('삭제되었습니다.')

                localStorage.setItem('boardList' , JSON.stringify(boardList))
                
                location.href="list.html"
            }
        }
    }
}