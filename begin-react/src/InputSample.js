import React, { useState } from 'react';

// #의 작업을 "불편성을 지킨다"라고 함
// 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 할 수 있음 
function InputSample() {
    // #객체 상태 업데이트
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        // #기존의 상태 복사
        const { value, name } = e.target; // e.target 에서 name 과 value 를 추출
        
        // #값을 덮어씌우고 새로운 값 설정
        setInputs({
        ...inputs, // 기존의 input 객체를 복사
        [name]: value // name 키를 가진 값을 value 로 설정 (nextInputs[name] = value와 같은 동작)
        });
    };

    const onReset = () => {
        setInputs({
        name: '',
        nickname: '',
        })
    };


    return (
        <div>
        <input name="name" placeholder="이름" onChange={onChange} value={name} />
        <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
        </div>
    );
}

export default InputSample;