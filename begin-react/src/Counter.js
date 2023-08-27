import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    // 같은 의미, 배열 비구조 할당을 통해 간결하게 사용 가능
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
        // 함수형 업데이트 - 성능 최적화
      }
      const onDecrease = () => {
        // setNumber(number - 1);
        setNumber(prevNumber => prevNumber + 1);
      }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;