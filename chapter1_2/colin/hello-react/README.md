## JSX

### Summary
- Basic
    - node_modules에 있는 module을 import (node.js이용)
    - index.js를 이용하여 필요한 파일을 모두 불러와서 bundling 함 (webpack 이용)
- JSX
    - JS의 확장문법이며 함수를 직접 이용하는 불편함을 덜기 위해 XML처럼 쉽게 사용할 수 있도록 함
    - 보기 쉬움 / 익숙함 (div / span 같은 html 문법 사용가능)
    - 다만, 감싸인(부모) 요소를 사용해야 함
        - Virtual DOM에서 효율적으로 기존 DOM과 비교하기 위해
        - Div를 사용하고 싶지 않은 경우는 Fragment를 이용하면 됨
    - JS 표현
        - **const** : 변경 불가능한 상수
        - **let** / var : 동적 (let은 block단위(if 안에 쓰면 if안에만 적용), var는 scrop가 함수단위)
        - 조건부 : 삼항연산자(JS같이 ===), AND(&&)
        - undefined : 이것만 return하면 에러가 발생 -> OR(||) 처리 필요
    - inline styling
        - camelCase 필요
        - css를 이용한 class style 적용의 경우, class 대신 className을 써야함
    - Lint / Prettier
        - Lint : eslint --init 이후 사용 (workspace root dir.에서 (no project dir)에서)
    - Prettier
        - Format Document 이용
        

- ReactDom.render
    - component를 page에 rendering하는 역할
    - arg 1 : rendering할 JSX
    - arg 2 : JSX를 rendering할 document 요소 (public/index.html)

