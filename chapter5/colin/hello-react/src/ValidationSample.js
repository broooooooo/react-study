import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        // 버튼 클릭 시 this.input (input을 가리키는 ref)
        this.input.focus(); // 일반 DOM다루듯이
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success': 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;