// import React, { useState, useEffect } from 'react';

// const Info = () => {
//     const [name, setName] = useState('');
//     const [nickName, setNickName] = useState('');

//     // // 첫 rendering(mount) 및 update시 호출
//     // // 기본적으로 rendering된 후 바로 실행, 두 번쨰 파라미터 배열에 따라 Update시 호출
//     // useEffect(() => {
//     //     console.log('렌더링 완료');
//     //     console.log({
//     //         name,
//     //         nickName
//     //     });
//     // }, [name] 
//     //     // []를 넣을 경우 mount에만 적용 (update에는 useEffect를 호출하지 않음)
//     //     // [var]를 할 경우 var가 update될 때만 호출
//     // );

//     // 컴포넌트가 언마운트되기 전이나 업데이트 직전에 작업수행 -> cleanup 함수 반환 필요
//     useEffect(() => {
//         console.log('effect');
//         console.log(name);
//         return () => {
//             console.log('cleanup');
//             console.log(name);
//         }
//     },
//     );

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     }

//     const onChangeNickName = (e) => {
//         setNickName(e.target.value);
//     }

//     return (
//         <div>
//             <div>
//                 {/* <input value={name} onChange={(e) => setName(e.target.value)}/> */}
//                 <input value={name} onChange={onChangeName}/>
//                 <input value={nickName} onChange={onChangeNickName}/>
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b>{name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b>{nickName}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Info;




// useReducer 방식
import React, { useReducer } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
    return {
        ...state, // python에서의 {**dict_1, **dict_2}같이 merge하는 기능
        [action.name]: action.value // this.setState에서의 [e.target.name]: e.target.value
    };
}

const Info = () => {
    // const [state, dispatch] = useReducer(reducer, {
    //     name: '',
    //     nickname: ''
    // });
    // const { name, nickname } = state; // this.state를 쓰지 않고 바로 state만 씀
    // const onChange = (e) => {
    //     dispatch(e.target); // e.target값 자체를 action으로 활용
    // }

    const [state, onChange] = useInputs({
        name:'',
        nickname:''
    });
    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b>{name}
                </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
            </div>
        </div>
    )
}

export default Info;