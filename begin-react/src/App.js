import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
    console.log('활성 사용자 수 세는 중');
    return users.filter(user => user.active).length;
}
function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const { username, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
    };
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: false,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        }
    ]);
    //useRef를 사용한 것은 값이 변하더라도 리렌더링 되지 않는다.
    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // 배열 추가 방법 2가지 (스프레트 연산자 또는 concat 사용)
        setUsers([...users, user]);
        // setUsers(users.concat(user));

        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = id => {
        setUsers(users.map(
            user => user.id === id
                ? { ...user, active: !user.active }
                : user
        ))
    }
    
    // useMemo를 사용하면 필요할때만 함수를 호출 할 수 있다.
    const count = useMemo(() => countActiveUsers(users), [users]);
    
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수: {count}</div>
        </>
    );
}

export default App;