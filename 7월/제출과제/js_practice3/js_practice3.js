/*
//1 번
let fruitList = ['사과' , '바나나'];
let fruit = prompt("과일을 입력하세요");

count =  0

if ( fruitList[count] == fruit ){
    console.log('이미 존재하는 과일입니다.')
}else
    count++

if ( fruitList[count] == fruit ){
    console.log('이미 존재하는 과일입니다.')
}else
    count++

if(count > fruitList.length - 1){
    fruitList.push(fruit)
}
console.log(fruitList)
*/


/*
//2번
let person = prompt("주민등록번호 13자리를 입력하십시오")
if(person[6]=='1'&&'3')
    console.log("blue")
if(person[6]=='2'&&'4')
    console.log("red")

*/


/*
//3번
let price = prompt("가격을 입력하세요")
if(price >= 50000)
    console.log('10% 할인 총 금액 : ' + (price - (price / 10)))
    
if(price >= 30000 && price < 50000)
    console.log('5% 할인 총 금액 : ' + (price - (price / 20)))

if(price >= 10000 && price < 30000)
    console.log('1% 할인 총 금액 : ' + (price - (price / 100)))

if(price < 10000)
    console.log("할인없음 총 금액 :"+ price)
*/

/*
//4번
let month = prompt("1~12사이의 월을 입력하시오")
if((5>= month) && (month >=3) ){
    console.log('입력하신 달은 봄입니다.')
}
if(8>= month && month >=6 ){
    console.log('입력하신 달은 여름입니다.')
}
if(11>= month && month >=9 ){
    console.log('입력하신 달은 가을입니다.')
}
if((2>= month >=1) || month == 12){
    console.log('입력하신 달은 겨울입니다.')
}else
    console.log('잘못입력된 월입니다.')
*/

/*
//5번
let a = prompt("첫번째 수를 입력하시오")
let b = prompt("두번째 수를 입력하시오")
let c = prompt("세번째 수를 입력하시오")
let max = 0
if ( a > b){
    max = a
}else{
   max = b 
}

if(max > c ){
    console.log('가장큰수는'+max+'입니다')
}else{
    max = c 
    console.log('가장 큰 수는 '+max+'입니다')
}
*/


/*
// 6번
let year = prompt("연도를 입력하시오")
if((year%4 == 0 && year%100 != 0) || year%400 ==0){
    console.log(year + '년은 윤년입니다')
}else
    console.log(year + '년은 윤년이 아닙니다')
*/

/*
// 7번 
let a = Number(prompt("첫번쨰 수를 입력하세요"))
let b = Number(prompt("두번쨰 수를 입력하세요"))
let c = Number(prompt("세번쨰 수를 입력하세요"))
let 소,중,대

if(a>b){
    if(a>c){
        대 = a
        if(b>c){
            중 = b
            소 = c
        }
        else{
            중 = c 
            소 = b
        }
    }
}else{
    if(b>c){
        대 = b
        if(a>c){
            중 = a
            소 = c 
        }else{
            중 = c 
            소 = a
        }
    }
}

console.log(소)
console.log(중)
console.log(대)
console.log(`${소}  ${중}  ${대}`)
*/

/*
//8번
let A = prompt('플레이어 A:');
let B = prompt('플레이어 B:');

if(A == (B+1) %3 )
  console.log("A 승")
else if (A==B)
  console.log("무승부")
else
  console.log("B 승")
*/


/*
//9번
let carArray = ['250어7142', '142가7415', '888호8888']
let locationArray = [ 'A1','B1','C2'];
let input = prompt();

let A = carArray.indexOf(input);
console.log(locationArray[A])
*/



/*
// 10번 
let courseList = ['수학','영어','과학','국어'];

let input = prompt('제외할 과목을 입력하세요');
let A = courseList.indexOf(input)
courseList.splice(A,1)
console.log(courseList);
*/
