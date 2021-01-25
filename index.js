"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "jaehoon";
const gender = "male";
const potter = (name, gender) => {
    console.log(`Hello I am ${name} and gender is ${gender}!`);
};
potter(name); // 타입스크립트에서는 gender까지 포함해 총 2개를 예상했는데, 함수 실행할 땐 name 1개만 실행. 즉, 이러한 undefined 출력을 막아주면서 에러를 띄움. start실행해도 에러나옴.
//# sourceMappingURL=index.js.map