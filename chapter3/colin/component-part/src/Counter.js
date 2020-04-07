import React, { Component } from 'react';

class Counter extends Component {
    // // constructor 방식
    // constructor(props) {
    //     super(props);

    //     // initialize state
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }

    // skip constructor
    state = {
        number: 0,
        fixedNumber: 0
    }

    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h1>Fixed Number : {fixedNumber}</h1>
                <button
                    // // button에서 onClick 발생 시 호출할 함수 선언
                    // onClick={() => {
                    //     this.setState({number : number + 1});
                    // }}

                    // this.setState를 여러번 호출하는 경우
                    //  -> 비동기식이기 때문에 두번 호출이 안됨
                    // onClick={() => {
                    //     this.setState({number : number + 1});
                    //     this.setState({number : this.state.number + 1});
                    // }}

                    onClick={() => {
                        this.setState(prevState => {
                            return {
                                number : prevState.number + 1
                            };

                        });
                        this.setState(prevState => ({
                            number : prevState.number + 1
                        }),
                        // callback
                        () => {
                            console.log('방금 setState가 호출됨')
                            console.log(this.state)
                        }
                        );
                    }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;
