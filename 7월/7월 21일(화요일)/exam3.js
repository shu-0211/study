let DB = [];  // 이걸지울까?


function 등록함수(){
    
    let 날짜값  = document.querySelector('#date').value
    let 항목값  = document.querySelector('#text').value
    let 금액값  = document.querySelector('#price').value
    let data = {'날짜' : 날짜값 ,'항목' : 항목값 , '금액' : 금액값 };
    
    

    DB.push(data)
    
    let html = ' ';

    for(i=0 ; i < DB.length ; i++){
        html += 
        `
        <tr>
            <td>${DB[i].날짜}</td>
            <td>${DB[i].항목}</td>
            <td>${DB[i].금액}</td>
        </tr>` ;
        
    }
    
    document.querySelector('.table').innerHTML = html;
}

/*
function send(){
    const date = document.querySelector('.dt');
    const list = document.querySelector('.li');
    const cost = document.querySelector('.co');
    const table1 = document.querySelector('.table1');

    const result_d = date.value;
    const result_l = list.value;
    const result_c = Number(cost.value);

    table1.innerHTML += `<tr>
                <td>${result_d}</td>
                <td>${result_l}</td>
                <td>${result_c.toLocaleString()}</td>
                </tr>`
}
*/

