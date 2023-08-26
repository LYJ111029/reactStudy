import React from 'react';
import Hello from './Hello';

function App() {
  /*
  2개 이상의 태그는 하나의 태그 안에 감싸져야 한다.
  불필요한 태그를 붙일 경우 스타일이 틀어지는 경우가 있을 수 있다.
  그래서 Fragment를 사용하면 불필요한 태그가 없음 
  Fragment 작성 : 이름없는 태그
  */

  return (
    <>
      <Hello />
      <div>안녕하세요</div>
    </>
  );
}

export default App;
