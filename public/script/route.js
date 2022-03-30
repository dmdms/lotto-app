// 자바스크립트 변수 : var  vs  let, const(=상수)
// 차이점 : 구식 vs 신식
// ECMA Script -- > JS Standard --> ES 5 ==> ES 6 (과도기)
// var 보다 let, const 사용
// 문제점 : var는 선언하지 않고도 사용 가능, 전역/지역 명확하지 않음

// 대상 : id 요소 camelCase, class 요소 kebab_case
const openBTN = document.querySelector("#openSide")
const closeBTN = document.querySelector("#closeSide")
const sidePan = document.querySelector("#sidePannel")

// 이벤트 등록
openBTN.addEventListener("click", sideOpen);
closeBTN.addEventListener("click", sideClose);

// 함수
function sideOpen(){
    sidePan.classList.remove("d-none");
}
function sideClose(){
    sidePan.classList.add("d-none");
}
