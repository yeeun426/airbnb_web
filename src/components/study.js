// const { hasFormSubmit } = require("@testing-library/user-event/dist/utils");
// const { useEffect } = require("react");

// useEffect(() => {
//     first

//     return() => {
//         second
//     }
// }, [])
// 페이지가 렌더링 될때 first를 실행시켜준다
// 조건을 주고 싶은걸 first에 넣기
// [] : 어떤 값이 변했을 때 useEffect를 실행시켜주고 싶다를 해주면 됨
// 배열 안에 아무것도 없으면 화면이 렌더링될때
// 배열 안에 PROPS/STATE를 적으면 값이 변할 때
// 페에지가 사라질 때는 return안
