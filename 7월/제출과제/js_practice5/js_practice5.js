/*
// 1번
let product = {'제품명' : ' ','가격' : 0 , '제조사' : ' '}
product.제품명 = prompt("제품명을 입력해주세요 : ")
product.가격 = prompt("가격을 입력해주세요 : ")
product.제조사 = prompt("제조사을 입력해주세요 : ")

console.log(product)
*/


/*
// 2번
const members = [
    { id: 'user1', password: 'pass1', name: '사용자1' },
    { id: 'user2', password: 'pass2', name: '사용자2' },
];

let 객체 = {}

let 아이디 = prompt("아이디를 입력하세요")

for(j=0 ; j<members.length ; j++){
    if(아이디 == members[j].id){
        console.log ("존재하는 아이디 입니다")
        throw new Error('스크립트 종료');
    }
    
}
객체.id = 아이디
let 비밀번호 = prompt("비밀번호를 입력하세요")
let 이름 = prompt("이름을 입력하세요")

객체.password = 비밀번호
객체.name = 이름
members.push(객체)
for(i=0 ; i < members.length ; i++){
     console.log(members[i])
}
*/


/*
// 3번
const scores = [
    { name: 'A', math: 80, science: 92 },
    { name: 'B', math: 95, science: 88 },
    { name: 'C', math: 76, science: 78 }
];
let aa = 0
for( i = 0 ; i <= scores.length -1 ; i++){
    aa += scores[i].math
}
aa = aa/scores.length
console.log(aa)
*/


/*
// 4번
const products = [
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
    { id: 3, name: '포도' },
    { id: 4, name: '딸기' }
];
let count = 0
for( i = 0 ; i < products.length ; i++ ){
    if(products[i].id == 3){
        console.log(products[i])
        count++
    }
}

if(count==0){console.log("상품을 찾을 수 없습니다.")}
*/


/*
//5 번
const users =[
{ id: 1, name: '유저1', isActive: true },
{ id: 2, name: '유저2', isActive: false },
{ id: 3, name: '유저3', isActive: true },
{ id: 4, name: '유저4', isActive: false }
];

let user = { }
let activeUsers = [ ]
for ( i = 0 ; i < users.length ; i ++ ){
    if(true == users[i].isActive){
        user = users[i]
        activeUsers.push(user.name)
    }
}
console.log(activeUsers)
*/



/*
//6번
const movies =[
{ title: '인셉션', director: '크리스토퍼 놀란'},
{ title: '기생충', director: '봉준호' },
{ title: '매트릭스', director: '워쇼스키 자매' }
]
let aaa
let movieTitle = []
for ( i = 0 ; i < movies.length ; i ++  ){
    aaa = movies[i].title
    movieTitle.push(aaa)
}

console.log ( movieTitle)
*/


/*
// 7번
const team = [
{ name: '철수', department: '개발팀' },
{ name: '영희', department: '기획팀' },
{ name: '민수', department: '개발팀' },
{ name: '지혜', department: '기획팀' }
];

let aaa
let 부서 = [ ]

let result = {'개발팀' : [ ] , '기획팀' : [ ]}

for ( i = 0 ; i < team.length ; i ++ ){
    if(team[i].department == '개발팀') {
        aaa = team[i].name
        result.개발팀.push(aaa)
    }else{
        aaa = team[i].name
        result.기획팀.push(aaa)
    }

}
console.log(result)
*/


/*
//풀이 해 주신거 
const result = {  }
const team = [
{ name: '철수', department: '개발팀' },
{ name: '영희', department: '기획팀' },
{ name: '민수', department: '개발팀' },
{ name: '지혜', department: '기획팀' }
];

for( i = 0 ; i < team.length ; i++ ){

    if( team[i].department in result){  // '속성명' in 객체 , 객체 내 특정 속성이 있으면 TRUE/FALSE
        // 속성명 있으면 바로 추가 
        result[team[i].department].push(team[i].name)
    }else{
        // 없으면 속성명을 result 속성에 추가 
        result[team[i].department] = [team[i].name]
    }
}

console.log(result)
*/



/*
//8번
const cart = [{ id: 1, quantity: 2 },{ id: 3, quantity: 1}]
const productsInfo = [
{ id: 1, price: 1000 },
{ id: 2, price: 5000 }, // 장바구니에 없는 상품
{ id: 3, price: 2500 }
]
let total = 0
for(i = 0 ; i < cart.length ; i++){
    for(j=0 ; j < productsInfo.length ; j++){
        if(cart[i].id == productsInfo[j].id){
            total += cart[i].quantity * productsInfo[j].price
        }
    }
}
console.log(total + "원 입니다.")
*/


/*
//9번
const votes = [ 'A','B','B','C','A','B','A'];
const result = { }

for( i = 0 ; i < votes.length ; i++ ){
    if (votes[i] in result){
        result[ votes[i] ] += 1
    }else{
        result[ votes[i] ] = 1;
    }
}
console.log( result )
*/


/*
//10번
const webtoons =[
{ title: '나 혼자만 레벨업', rating: 9.8 },
{ title: '유미의 세포들', rating: 9.9 },
{ title: '전지적 독자 시점', rating: 9.7}
];

let html = ' '

for(i=0; i<webtoons.length ; i++){
    html += ` ${ webtoons[i].title } <br> `
    for(star = 1 ; star <= 10 ; star++){
        
        if( star > Math.floor(webtoons[i].rating)){
            html += '☆'
            continue
        }else{
            html += '★'
        }
    }
    html += '<br>'
}

document.querySelector('p').innerHTML = html
*/

/*
//11번
let response = {"currentCount":10,"data":[{"소재지":"인천광역시 부평구 안남로417번길 20, 2층 (청천동)","업소명":"1982삼계정","업태":"한식","연번":1,"전화번호":"032-512-1982","지정메뉴":"녹두삼계탕"},{"소재지":"인천광역시 부평구 부평대로 301 (청천동,남광센트렉스 111호)","업소명":"갈비가","업태":"한식","연번":2,"전화번호":"032-363-3787","지정메뉴":"속초코다리냉면"},{"소재지":"인천광역시 부평구 평천로553,1층(삼산동)","업소명":"경복궁삼계탕","업태":"한식","연번":3,"전화번호":"032-511-1494","지정메뉴":"들깨삼계탕"},{"소재지":"인천광역시 부평구 부평대로63번길10-11(부평동)","업소명":"금강산추어탕","업태":"한식","연번":4,"전화번호":"032-527-8118","지정메뉴":"추어탕"},{"소재지":"인천광역시 부평구 부평대로87번길 4(부평동)","업소명":"뉴욕반점","업태":"중식","연번":5,"전화번호":"032-516-4488","지정메뉴":"삼선짬뽕,찹쌀탕수육"},{"소재지":"인천광역시 부평구 신트리로22번길 15-14 (부평동, 1층 일부)","업소명":"더히든키친","업태":"양식","연번":6,"전화번호":"032-272-7276","지정메뉴":"바질페스토파스타"},{"소재지":"인천광역시 부평구 마장로 402(청천동)","업소명":"덕수갈비","업태":"한식","연번":7,"전화번호":"032-517-4070","지정메뉴":"왕갈비탕"},{"소재지":"인천광역시 부평구 대정로 93, 웰링턴 1층 103호 (부평동)","업소명":"동강해물탕","업태":"한식","연번":8,"전화번호":"032-524-9166","지정메뉴":"해물탕"},{"소재지":"인천광역시 부평구 백범로468번길45(십정동)","업소명":"동암아구해물탕","업태":"한식","연번":9,"전화번호":"032-435-0233","지정메뉴":"해물찜,해물탕"},{"소재지":"인천광역시 부평구 부흥로257-7(부평동)","업소명":"들내음 들깨칼국수","업태":"한식","연번":10,"전화번호":"032-515-4151","지정메뉴":"팥칼국수"}],"matchCount":67,"page":1,"perPage":10,"totalCount":67}
let html = ' '
let aaa = {}
html += `<td>업소명</td>`
html += `<td>연번</td>`
html += `<td>소재지</td>`
html += `<td>지정메뉴</td>`
html += `<td>전화번호</td>`
html += `<td>업태</td>`
html += `</tr>`


for(i = 0 ; i < response.data.length ; i++){
    html += `<td>${response.data[i]["업소명"]}</td>`
    html += `<td>${response.data[i]["연번"]}</td>`
    html += `<td>${response.data[i]["소재지"]}</td>`
    html += `<td>${response.data[i]["지정메뉴"]}</td>`
    html += `<td>${response.data[i]["전화번호"]}</td>`
    html += `<td>${response.data[i]["업태"]}</td>`

    html += `</tr>` 
}


document.querySelector('table').innerHTML = html
*/