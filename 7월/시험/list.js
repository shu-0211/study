printboard();
function printboard(){

    
    const tbody = document.querySelector('#tbody')
    let html = ''
    
    
    let boardList = localStorage.getItem( 'boardList')
    if(boardList == null){boardList = []}
    else{ boardList = JSON.parse(boardList)}

    for(i=0 ; i < boardList.length ; i++){
        let obj = boardList[i];

        html += `<tr> <td> ${obj.no} </td>
        <td > <a href="view.html?no=${obj.no}"> ${obj.title} </a> </td>
         </tr>`
    }

    
    tbody.innerHTML = html;
}