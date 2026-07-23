printcontent()
function printcontent(){

    const url = new URLSearchParams(location.search)
    let select = url.get('no');
    console.log (select)

    
    let boardList = localStorage.getItem( 'boardList')
    if(boardList == null){boardList = []}
    else{ boardList = JSON.parse(boardList)}

    for(i=0 ; i < boardList.length ; i++){
        let obj = boardList[i]
        if(select == boardList[i].no){

            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content

        }
    }

}


function contentDelete(){


    const url = new URLSearchParams(location.search)
    let select = url.get('no');

    let boardList = localStorage.getItem( 'boardList')
    if(boardList == null){boardList = []}
    else{ boardList = JSON.parse(boardList)}

    let password = prompt("비번을 입력하세요");

    for(i=0 ; i < boardList.length ; i++){
        let obj = boardList[i]
        if(select == obj.no){
            if(password == boardList[i].pwd){
                boardList.splice(i,1) 
                localStorage.setItem('boardList' ,JSON.stringify(boardList))
            }
            

        }
    }
    alert('삭제되었습니다.')
    location.href="list.html"

}