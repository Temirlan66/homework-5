import { useState } from 'react';
import './App.css';
import NewUser from './components/newUser/NewUser';
import Users from './components/users/Users';

function App() {

  const [users,setUsers] = useState([
    {
      userName:"Bayaman",
      userAge:90,

    },

    {
      userName:"Nurbolot",
      userAge:24,
      
    },
    {
      userName:"Zhumabek",
      userAge:22,
      
    }

  ])

  users.sort((a,b)=>{
    return b.userAge -a.userAge
  })


  const addNewUsers = (data)=>{
    let newUsersAdd = [...users]
    newUsersAdd.push(data)
    setUsers(newUsersAdd)
  }
console.log(users);
  return (
    <div className="App">
     <NewUser newUserAdd={addNewUsers}/>
     <Users users={users}/>
     
    </div>
  );
}

export default App;
