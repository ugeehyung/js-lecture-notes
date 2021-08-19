function myfunction01(a, b) {
    return a > b ? '왼쪽 숫자가 더 큽니다.' : '오른쪽 숫자가 더 큽니다.';
}

// 나누기 결과를 정수로 얻는법
//  -> Math.round(), parseInt(), Math.floor(), ...
function appleBasket(numOfApple, basketSize) {
    return numOfApple % basketSize == 0 ? 
        Math.floor(numOfApple / basketSize) : 
        Math.floor(numOfApple / basketSize) + 1;
}

/* 함수를 변수에 담아서 사용할 수도 있다 */
let rabbit = function consoleRabbit() {
    console.log(' /)/)');
    console.log('(  ..)');
    console.log('(   >♡');
}

console.log(myfunction01(10, 15));
console.log(appleBasket(123, 10) + '개');

/* 함수에 ()를 붙이면 실행, ()를 붙이지 않으면 값으로써 활용 */
console.log(rabbit);
rabbit();

let anotherVar = myfunction01;
rabbit();
anotherVar(10, 11);

/* 매개변수로 함수를 전달해서 사용하는 경우도 있다 */
function myfunction02(f) {
    return f(5, 10);
}

console.log(myfunction02(myfunction01));
console.log(myfunction02(appleBasket));