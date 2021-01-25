// // interface로 타입을 지정해준다.
// interface Human {
//   name: string;
//   gender: string;
// }

class Human {
  // ts의 class는 JS와 달리 속성과 권한을 설정해줘야 한다.
  //public 이라는 속성을 선언해주기.
  public name: string;
  public gender: string;
  // class가 시작될 때마다 호출될 constructor
  constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }
}

// // 전달하고자 하는 객체
// const person = {
//   name: "jaehoon",
//   gender: "male"
// }
const john = new Human("Jaehoon", "male");

// 전달하고자하는 객채와 타입을 지정한 interface를 아래 함수의 파라미터로 설정한다.
const potter = (person: Human): string => {
  return `Hello I am ${person.name} and gender is ${person.gender}! Hi!!!`
}

console.log(potter(john))

// 이걸 설정 안해주면 이상하게 에러 뜨고, 컴파일 불가. 
export { };


// 자세한 설명은 노션에서 보기.