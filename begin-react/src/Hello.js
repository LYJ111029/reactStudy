import React from 'react';

// 쓰이는 곳(App.js)에서 값을 정한다 = props(부모)
// props 사용 방법 1
/*
function Hello(props) {
    return <div style={{
        color: props.color
    }}>안녕하세요 {props.name}</div>;
}
*/

// props 사용 방법 2
function Hello({ color, name }) {
    return <div style={{
        color
    }}>안녕하세요 {name}</div>;
}

// 설정된 props가 없는 경우 default 값 설정
Hello.defaultProps = {
    name:"이름없음",
};

export default Hello;