// 출력함수 
// 0. 시작하면 리스트가 보여야됨 
// 1. html 화면에 글번호 글제목을 출력하기 위해 변수연결을 해야됨
// 2. 로컬 스토리지를 불러와야됨
// 3. 정보를 순서대로 출력해야됨 (번호 , 제목)
// 4. 글 제목을 누르면 글 내용을 볼수 있는 페이지로 이동해야함. 

listboard()
function listboard(){


    // const tbody = document.querySelector('#tbody')

    let boardList = localStorage.getItem('boardList')
    if(boardList == null){ boardList = []}
    else{ boardList = JSON.parse(boardList)}
    
    let html = '  '
    
    
    for(i = 0 ; i < boardList.length ; i ++){
        let obj = boardList[i]  // boardList가 배열이니까 빈객체에 하나씩 담음
        html += ` <tr>
        <td> ${i+1} </td>
        <td> <a href="view.html?no=${obj.no}">${obj.title}</a></td>
        </tr> `
        
    }
        

    document.querySelector('#tbody').innerHTML = html ;

}