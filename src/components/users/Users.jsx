import React from 'react';
import UserItem from '../userItem/UserItem';

const Users = ({users}) => {
    return (
        <ul  className='ul__ka'>
           {users.map((el,index)=>{
            return(
                <UserItem
                key={index}
                userName={el.userName}
                userAge={el.userAge}
                />
            )
           })} 
        </ul>
    );
};

export default Users;