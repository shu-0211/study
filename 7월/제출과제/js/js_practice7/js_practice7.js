let DB = [ {날짜 : '2025-06-19' , 항목 : "점심식사" , 금액 : 9000}, 
    {날짜 : '2025-06-19' , 항목 : "교통비" , 금액 : 1500}];  
let html = ' '


function 등록함수(){
    
    let 날짜  = document.querySelector('#date').value
    let 항목  = document.querySelector('#text').value
    let 금액  = document.querySelector('#price').value
    let data = {날짜 , 항목 , 금액 };  // vs객체 생성시 속성값의 변수명이 같으면 생략가능
    
    

    DB.push(data)

    alert('등록성공')
    출력함수()
    /*
    html += 
    `<tr>
        <td>${DB[count].날짜}</td>
        <td>${DB[count].항목}</td>
        <td>${DB[count].금액}</td>
    </tr>` ;
    */
}

function 출력함수 (){
    // 어디에
    let 테이블 = document.querySelector('table > tbody')

    // 2. 무엇을, 매일 내 rk모든 자료 들은 hTML 형식으로
    let html = ' '
    for( i = 0 ; i < DB.length; i++){
        let data = DB[i];


        html += 
    `<tr>
        <td>${DB.날짜}</td>
        <td>${DB.항목}</td>
        <td>${DB.금액.toLocaleString()} 원</td>
    </tr>` ;
    }
    // 3. 출력
    테이블.innerHTML = html;
}
출력함수()

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

