/*
// 1번
let numbers = [ 23, 5, 67, 12, 88, 34]
let max = 0
for ( i = 0 ; i < numbers.length ; i ++ ){
    if( max <numbers[i]){max = numbers[i]}
}
console.log(max)
*/

/*
//2번
for (let i = 0; i < 5; i++) {
  let stars = "";

  for (let j = 5; j > i; j--) {
    stars += "*";
  }

  console.log(stars);
}
*/

/*
//3번
let userNames = ['김하준' , '이서아' , '박솔민' , '최도윤']
for ( i = 0 ; i <= userNames.length ; i++ ){
    console.log[userNames[i]]
    if( userNames[i].indexOf('솔') != -1){
        console.log(userNames[i])
        break
    }
}
*/

/*
//4번
let seatLayout = [
    ['A1', 'A2', 'A3'], 
    ['B1', 'B2', 'B3'], 
    ['C1', 'C2', 'C3']
];

for (let i= 0 ; i <= seatLayout.length-1 ; i ++){
    for( let j = 0 ; j <= seatLayout[i].length -1 ; j ++){
        console.log( seatLayout[i][j])
    }
}
*/

/*
//5번
let numbers = [1, 5, 2, 3, 5, 1, 4, 2];
let 배열 =[]
for (i = 0 ; i < numbers.length ; i++){
    if( 배열.indexOf(numbers[i]) == -1){
        배열.push(numbers[i])
    }
}
console.log(배열)
*/

/*
//6번
let numbers = [5, 3, 4, 1, 2];
let box = 0
for(i=0 ; i < numbers.length ; i++ ){
    for(j=i+1; j<numbers.length ; j++){
        if(numbers[i] > numbers[j]){
            box = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = box
        }
    }
}
console.log(numbers)
*/

/*
// 7번 
let products = ['볼펜', '노트', '지우개']
let stock = [10, 5, 20]
let 상품명 = prompt('상품명을 입력해주세요 : ')
let 수량 = prompt('수량을 입력해 주세요 : ')

for(i=0; i <= products.length -1 ; i++ ){
    if(products[i] == 상품명){
        if(stock[i] >= 수량){
            console.log('구매완료')
            stock[i] =  stock[i] -  수량 
        }
    }
    if(products[i] != 상품명){
        console.log('없는 상품입니다.')
        breake
    }
}
for ( i= 0 ; i <=  stock.length -1 ; i++){
    console.log ('남은 재고 :' + products[i] + stock[i])
}
*/


/*
// 8번 
let movieNames = ['히든페이스', '위키드', '글래디에이터2', '청설'];
let movieRatings = [8, 4, 7, 6];

let html = ' ';

for ( i = 0 ; i <= movieNames.length -1 ; i ++){

    html += movieNames[i] + ' ';

    for(star = 1 ; star <= 10 ; star ++  ){
        if ( star <= movieRatings[i]){
            html += '★';
        }
        else 
            html += '☆';
    }
    
    html += '<br />';
}

document.querySelector('p').innerHTML = html;
*/

/*
// 9번
let seatStatus = ['빈좌석', '예약석', '예약석', '빈좌석', '예약석', '빈좌석']
let html2 = ' ';

for( i = 0 ; i <= seatStatus.length -1 ; i ++){
    
    // 빈좌석이면 blue , 예약석이면 red
    if( seatStatus[i] == '빈좌석' ){
        html2 +=`<span style="color: blue;">${seatStatus[i] }</span>`
    }else{
        html2 +=`<span style="color: red;">${seatStatus[i] }</span>`
    }

    // 2배수 마다 줄바꿈을 함.
    if( (i+1) % 2 == 0){
        html2 += '<br />'
    }
}

document.querySelector('div').innerHTML = html2;
*/


/*
// 10번
let carNumbers = ['210어7125', '142가7415', '888호8888', '931나8234'];
let usageMinutes = [65, 30, 140, 420];
let fee = []
let html = ' ';

html += '주차 최종 요금';
 html += '<br />';


for ( i = 0 ; i <= carNumbers.length -1 ; i++){
    
    html += carNumbers[i] + ' ';

    cash = 1000 + parseInt( (usageMinutes[i] - 30) / 10) * 500
    if(cash > 20000){
        cash = 20000
    }
    fee.push (cash)

    html += ': ' + fee[i] +'원';
    html += '<br />';
    
}

console.log(fee)

html += '<br />';

document.querySelector('h1').innerHTML = html;
*/