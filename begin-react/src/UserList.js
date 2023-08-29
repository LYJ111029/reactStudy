import React from 'react';

function User({ user, onRemove }) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{username}</b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {/* 배열을 렌더링할때는 key(고유값) 설정해줘야함 */}
            {/* 고유값이 따로 없다면, index를 key로 사용 */}
            {users.map((user, index) => (
                <User user={user} key={user.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default UserList;