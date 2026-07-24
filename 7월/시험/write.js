function writeboard(){

    // 1. 제목,내용,비번 입력받은값 가져오기
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    const pwd = document.querySelector('#pwd').value


    // 사용자에게 정보를 받아 boardList에 push할 빈 객체 생성
    let obj = { title, content , pwd}
    console.log(obj)
    // 2. 로컬스토리지 내용 가져오기 

    let boardList = localStorage.getItem('boardList')
    console.log(boardList)
    if(boardList == null){ boardList = []}
    else{ boardList = JSON.parse(boardList)}

    obj.no = boardList.length == 0 ? 1 : boardList.length + 1
    // 1번째 배열  -> 0 2번째 배열 -> 1



    // 3. 로컬스토리지에 올리기

    boardList.push(obj)
    console.log(boardList)
    localStorage.setItem('boardList', JSON.stringify( boardList ))
    alert('등록되었습니다.')

    // 3. 페이지이동
    location.href="list.html"

}