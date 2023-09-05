import React, { useRef, useState, useMemo, useCallback } from 'react';
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

    // useCallback 함수로 인해 inputs가 바뀔때만 함수 호출되고 그렇지 않을땐 기존에 것을 다시 재사용
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs({
          ...inputs,
          [name]: value
        });
    }, [inputs]);

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
    
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };

        setUsers(users => users.concat(user));
        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(id => {
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users => users.map(
            user => user.id === id
                ? { ...user, active: !user.active }
                : user
        ))
    }, []);

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