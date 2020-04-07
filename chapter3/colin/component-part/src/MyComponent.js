import React, {Component} from 'react';
import PropTypes from 'prop-types';

// // 1) 함수형 Component

// // function() 대신 [ES6]화살표 함수 문법사용 () => {}
// const MyComponent = () => {
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// export default MyComponent; // 다른 파일에서 import 할 수 있도록


// 2) Props
// const MyComponent = props => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {props.name}입니다. {props.children}
//         </div>
//     );
// };

// // defaultProps
// MyComponent.defaultProps = {
//     name : '기본 이름'
// };

// export default MyComponent;

// 2) 비구조화 방식 (destructuring assingment)
// const MyComponent = props => {
//     const {name, children} = props;
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. {children}
//         </div>
//     );
// };

// // 혹은
// const MyComponent = ({name, children}) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. {children}
//         </div>
//     );
// };


// // defaultProps
// MyComponent.defaultProps = {
//     name : '기본 이름'
// };

// // propTypes
// MyComponent.propTypes = {
//     name : PropTypes.string.isRequired
//     // isRequired는 defaultProps가 있으면 Warning 발생 안함
// };

// Class형 Component의 Props
class MyComponent extends Component {
    // class내부에서 defaultProps / propTypes 선언시
    static defaultProps = {
        name: '기본이름'
    };
    static propTypes = {
        name : PropTypes.string.isRequired
    };

    render() {
        const {name, children} = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br/>
                children값은 {children}입니다.
            </div>
        )
    }
}

// defaultProps
MyComponent.defaultProps = {
    name : '기본 이름'
};

// propTypes
MyComponent.propTypes = {
    name : PropTypes.string.isRequired
    // isRequired는 defaultProps가 있으면 Warning 발생 안함
};

export default MyComponent;