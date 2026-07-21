/*
// 문제 1
function isAdult (x){
    if(x>=20){
        return true;
    }
    else 
        return false;
}
console.log(isAdult(25))
console.log(isAdult(17))
*/


/*
//문제 2
const numbers = [10, 20, 30, 40, 50] ;

function sumArray(numbers){
    let sum =0
    for(i=0; i < numbers.length ; i++){
        sum += numbers[i]
    }
    return sum;
}

console.log(sumArray(numbers))
*/


/*
//문제3
const words = ['apple', 'banana', 'kiwi', 'strawberry'] ;
function findLongestWord (words){
    let long = -1
    for(i=0 ; i < words.length; i++){
        if(words[i].length > long)
            long = i
    }
    return words[long]
}
console.log(findLongestWord(words))
*/


/*
//문제 4
let userScore = 0

function gainScore(){
    userScore += 10
}

function loseScore(){
    userScore -= 5
}

gainScore()
gainScore()
gainScore()
loseScore()

console.log(userScore)
*/


/*
//문제 5

const students = [
{ name: '김철수', score: 85},
{ name: '이영희', score: 92 },
{ name: '박민준', score: 78 }
] ;

function findTopStudent (students){
    let 점수 = 0
    let student 
    for(i=0 ; i < students.length ; i++ ){
        if(students[i].score > 점수){
            점수 = students[i].score
            student = students[i].name
        }
    }
    return student
}
console.log(findTopStudent(students))
*/

/*
// 문제 6
const products = [
{ name: '노트북', price: 1200000, stock: 5},
{ name:'모니터', price: 350000, stock: 12 },
{ name: '키보드', price: 80000, stock: 25 }
]
let html = ' '
function renderProducts(){
    for(i = 0 ; i < products.length ; i++ ){
        html += ` <h4> ${ products[i].name } </h4> `
        html += ` <p> ${ products[i].price } </p> `
        html += ` <p> ${ products[i].stock } </p> `
    }
    
}
renderProducts()
document.querySelector('div').innerHTML = html ;
*/


/*
//문제 7
function calculator ( num1 , num2 , operator ){
    let aaa
    if(operator == '+'){
        aaa = num1 + num2
        return aaa
    }
    if(operator == '-'){
        aaa = num1 - num2 
        return Math.abs(aaa)
    }
}

console.log(calculator(33,55,'-'))
*/

/*
// 문제 8
let todoList = ['장보기', '운동하기'];
let html = ' ';
console.log(todoList)
function renderList(todoList){

    for(i = 0 ; i < todoList.length ; i ++){
        html += `${todoList[i]} <br>`
    }

}
renderList(todoList)
document.querySelector('li').innerHTML = html;
*/

/*
// 문제 9
function getTicketPrice (age){
    if( age < 8){
        return 0
    }
    else if( (8 <= age) && age <= 19){
        return 5000
    }
    else if( age >= 20){
        return 10000
    }
}
console.log (getTicketPrice(7) )
*/