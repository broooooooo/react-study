// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: ''
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Practice Event</h1>
//                 <input
//                  type='text'
//                  name='message'
//                  placeholder="Input anything"
//                  value={this.state.message}
//                  onChange = {
//                      (e) => {
//                         console.log(e.target.value);
//                         this.setState({
//                             message: e.target.value
//                         })
//                      }
//                  }
//                  >
//                 </input>
//                 <button onClick={() => {
//                     alert(this.state.message);
//                     this.setState({
//                         message:''
//                     });
//                 }
//                 }>
//                     확인
//                 </button>
//             </div>
//         )
//     }
// }

// export default EventPractice



// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: '',
//         username: ''
//     }

//     // handler function (미리 선언)
//     handleChange = (e) => {
//         this.setState({
//             // message: e.target.value
//             [e.target.name]: e.target.value // []를 사용하면 []안에 들어간 값이 key값으로 인식
//         });
//     }


//     handleClick = () => {
//         alert(this.state.username + ": " + this.state.message);
//         this.setState({
//             message: '',
//             username: ''
//         });
//     }

//     handlePresskey = (e) => {
//         if(e.key === 'Enter'){
//             this.handleClick();
//         }
//     }

//     // constructor(props) {
//     //     super(props);
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     render() {
//         return (
//             <div>
//                 <h1>Practice Event</h1>
//                 <input
//                  type='text'
//                  name='message'
//                  placeholder="Input anything"
//                  value={this.state.message}
//                  onChange = {this.handleChange}
//                 />
//                 <input
//                  type='text'
//                  name='username'
//                  placeholder='Input username'
//                  value={this.state.username}
//                  onChange={this.handleChange}
//                  onKeyPress={this.handlePresskey}
//                 />
//                 <button onClick={this.handleClick}>
//                     확인
//                 </button>
//             </div>
//         )
//     }
// }

// export default EventPractice


import React, { useState } from 'react';

const EventPractice = () => {
    // state
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    const [form, setForm] = useState({
        username: '',
        message:''
    })
    const { username, message } = form;

    // state setter
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form 내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value // 원하는 값을 덮어주기
        };
        setForm(nextForm)
    }

    // onClick 함수
    const onClick = () => {
        alert(username + ": " + message);
        // setUsername('');
        // setMessage('');
        setForm({
            username:'',
            message:''
        })
    };

    const onKeyPress = e => {
        if (e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
             type='text'
             name='username'
             placeholder='username'
             value={username}
             onChange={onChange}
            />
            <input
             type='text'
             name='message'
             placeholder='message'
             value={message}
             onChange={onChange}
             onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default EventPractice;