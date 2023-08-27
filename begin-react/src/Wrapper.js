import React from 'react';

// 쓰임 당하는 곳(Hello.js나 Wrapper.js)에서 값을 정한다 = children
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
        {children}
    </div>
  )
}

export default Wrapper;