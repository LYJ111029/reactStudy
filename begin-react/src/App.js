import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: true,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: true,
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
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
}

export default App;