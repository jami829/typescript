const name = "jaehoon"
const gender = "male"

const potter = (name: string, gender: string) => {
  console.log(`Hello I am ${name} and gender is ${gender}!`)
}

potter(name, gender)  // 타입스크립트에서는 gender까지 포함해 총 2개를 예상했는데, 함수 실행할 땐 name 1개만 실행. 즉, 이러한 undefined 출력을 막아주면서 에러를 띄움. start실행해도 에러나옴.
// 대신 4번 줄 gender에 ?를 붙여주면 undefined로 출력해줌. 이건 사용자가 gender을 입력안했거나 등등 경우의 수를 고려해서 결국 남자도 여자도 아닌 경우 undefined라도 띄울 수 있게 해줌.

// 이걸 설정 안해주면 이상하게 에러 뜨고, 컴파일 불가. 
export { };