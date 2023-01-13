import React from 'react';
import "./UserItem.css"

const UserItem = ({userName, userAge}) => {
    return (
        <div className='usersText'>
            <p>{userName} ({userAge} years old)</p>
        </div>
    );
};

export default UserItem;