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