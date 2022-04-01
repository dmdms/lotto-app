// var vs let, const ==> old vs new
// 클릭할 대상
const make1num = document.querySelector("#make_num1")
const make5num = document.querySelector("#make_num5")

// 이벤트 등록
make1num.addEventListener("click", show1num);
make5num.addEventListener("click", show5num);

// 로또 생성 함수
function show1num(){
    let num_one = [];
    for(let i=1; i<46; i++){ //1~45 만든다
        num_one.push(i);
    }
    num_one.sort(function(){ // 섞는다
        return Math.random() - 0.5
    });
    // console.log(num_one); // 확인한다
    // 추출 .slice() vs .splice()


    let start = Math.ceil(Math.random() * 40); // 정수로 시작점
    let new_num_one = num_one.slice(start, start+6);
    new_num_one.sort(function(a,b){ // 오름차순 정리
        return a-b;
    })
    localStorage.setItem("lottoNum", new_num_one)
    //let bonus_num = new_num_one[new_num_one.length-1]
    //let bonus_num = new_num_one[new_num_one.length-1]
    //console.log('보너스번호 :'+bonus_num)
    // localStorage.setItem("game_one", new_num_one)

    location.href = "/result1"
}
// let final_bonus_num = show1num();
// console.log("1게임 보너스 번호 : "+final_bonus_num);

function show5num(){
    let num_five = [];
    for(let i=1; i<46; i++){
        num_five.push(i);
    }
    // console.log(num_five); // 최초 만들어진 1~45 순서대로

    num_five.sort((a,b)=>{return Math.random()-0.7}); // arrow function (화살표 함수)
    // console.log(num_five)
    // num_five.sort(function(a,b){ // 위랑 같음
    //     retrun a-b
    // })

    // 6개씩 랜덤 5회 추출
    let num_five_arr = [];
    for(let i=0; i<5; i++){
        let start = Math.ceil(Math.random() * 40); // 정수로 시작점
        // console.log("start : "+start);
        let new_num_five = num_five.slice(start, start+6);
        new_num_five.sort(function(a,b){
            return a-b;
        });
        console.log(new_num_five);
        num_five_arr.push(new_num_five);
    }
    // console.log(num_five_arr);
    localStorage.setItem("lottoNums",JSON.stringify(num_five_arr)) // JSON.stringify() vs JSON.parse() : 데이터 주고받을 때 사용
    location.href = "/result5"
}