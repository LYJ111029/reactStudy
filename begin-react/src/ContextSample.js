// context API 이용
import React, { createContext, useContext } from 'react';

const MyContext = createContext('defaultValue');

function Child({ text }) {
    const text = useContext(MyContext);
    return <div>안녕하세요? {text}</div>;
}

function Parent({}) {
    return <Child />;
}

function GrandParent({}) {
    return <Parent />;
}

function ContextSample() {
    return (
        <MyContext.Provider value="COOD">
            <GrandParent />
        </MyContext.Provider>
    );
}

export default ContextSample;
