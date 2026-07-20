/*
// 1번
function sayHello (){
    console.log("함수 호출 성공!")
}
sayHello()

*/

/*
//2번
function printSum(x,y){
    let i = x+y
    console.log(i)
}

printSum(5,10)
*/

/*
//3번

let aaa 
let bbb = prompt("이름을 입력하시오")
function getWelcomeMessage(string){
    let ccc
    ccc = "환영합니다, [" + bbb + "]님!"
    return ccc
}
aaa = getWelcomeMessage(bbb)
console.log(aaa)
*/

/*
//4번

let counter = 0 
function increaseCount(){
    counter ++
}
increaseCount()
increaseCount()
increaseCount()
console.log(counter)
*/

/*
//5번
let number = prompt("숫자를 입력하시오")
function printNumbers (x){
    for(i = 1 ; i <= x ; i++)
        console.log(i)
}
printNumbers(number)
*/

/*
//6번 

let userList = []
for( ; ; ){
    
    let name = prompt("이름을 입력하시오. 그만 입력하시려면 * 를 입력하세요")
    if(name == '*')
        break;
    function addUser(name){
        userList.push(name)
    }
    addUser(name)
    console.log(userList)
}
*/


/*
//7번 
let fruits = []
function addUser(name){
        fruits.push(name)
}

for( ; ; ){
    
    let name = prompt("과일이름 입력하시오. 그만 입력하시려면 * 를 입력하세요")
    if(name == '*')
        break;
    addUser(name)
    
}
console.log(fruits)

*/


/*
//8번
let number = prompt("숫자를 입력하시오")
function isPositive ( x ){
    if(x > 0)
        return true
    else
        return false
}

let aaa = isPositive(number)
console.log(aaa)

*/

/*
//9번
let globalText = '전역';
function printLocal (){
    let localText = '지역';
    console.log(localText)
}
printLocal()
console.log(globalText)
// console.log(localText) 이부분 오류남 생성된 함수 밖이라서 호출안됨
*/