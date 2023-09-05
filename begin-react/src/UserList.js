import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const {username, email, id, active } = user;
    useEffect(() => {
        console.log(user);
        return () => {
            console.log("user 값이 바뀌기 전")
        }
    }, [user])
    return (
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: active ? 'green' : 'black'
                }}
                onClick={() => onToggle(id)}
            >{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);