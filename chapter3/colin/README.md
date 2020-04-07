## Chapter 3 : Component

### Component란
- 보여주기 위한 UI Template + 기능 / Action을 할 수 있는 API 기능을 포함
- 함수형 vs 클래스형 Component  

    | 함수형 | 클래스형 |
    |---|:---|
    | - 함수형 보다 간단 / 파일사이즈 작음 <br> - Hooks를 이용해 단점 개선| - `render`함수가 반드시 있어야 함 <br> - state와 라이프사이클 API 사용가능 |
    - React 공식 메뉴얼 권장 : `함수형 Component` + `Hooks`

### Props
- Child에서 Parent Component의 값을 불러와 사용하는 요소
- props를 렌더링 할 때는 JSX 내부에서 `{}`를 사용
    - props.`attr`
    - props.children (컴포넌트 Tag 사이의 내용을 보여줌)
- props를 풀어서 변수로 바로 이용하는 비구조화할당(destructuring assingment)/을 주로 사용
- propTypes를 통한 검증
    - `string / array / object / instancdOf, any` 등.. [ref](https://github.com/facebook/prop-types)
    - `isRequired`
- class형 Componenet에서 props 사용 시
    - `render`함수에서 this.props를 조회. 나머지는 동일

### State
- props와 다르게 child Component에서 바꿀 수 있는 값
1) class형 Component에서
    - class 형 Component : `this.state`이용해서 해당 Component의 현재 state값 호출 / `this.setState`를 이용해서 state값 변경
    - 비동기식 state 처리
        - ```
            // prevState : 현재 상태의 state, props : 현재 가지고 있는 props (optional)
            this.setState((prevState, props)) => {
            return {
                // 내용
            }}
            ```
2) 함수 형 Component에서 **(권장)**
    - 16.8이전 버전에서는 `state`사용 불가. 이후부터는 useState를 이용해서 사용 가능. 보통 Hooks를 많이 사용
    - [`message`, `setter`] = `useState('')` 방식으로 사용
