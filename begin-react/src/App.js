import React from 'react';
import Hello from './Hello';
import './App.css';

// 변수, 스타일 적용
function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '15px',
  }
  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      {/* class 이름을 설정할때는 className으로 */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
