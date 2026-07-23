function boardwrite(){
    const title = document.querySelector('#title').value
    const content = document.querySelector('#content').value
    const pwd = document.querySelector('#pwd').value

    
    const obj = { title , content , pwd }
    // console.log(obj)
    
    console.log(obj)
    
    
    let boardList = localStorage.getItem( 'boardList')

    if(boardList == null){boardList = []}
    else{ boardList = JSON.parse(boardList)}


    obj.no = boardList.length == 0 ? 1 : boardList[boardList.length-1].no+1
    

    boardList.push(obj);
    localStorage.setItem( 'boardList' , JSON.stringify(boardList))
    alert('등록되었습니다.')

    location.href="list.html"
    
}

