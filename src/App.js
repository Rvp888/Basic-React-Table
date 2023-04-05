
import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import UsersTable from './Components/UsersTable/UsersTable';

function App() {

  const [addUser, setAddUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id: Math.floor(Math.random()*100),
      name: "Rohan",
      age: "29",
      city: "Karwar",
    },
    {
      id: Math.floor(Math.random()*100),
      name: "Aditya",
      age: "28",
      city: "Margao",
    },
    {
      id: Math.floor(Math.random()*100),
      name: "Vivek",
      age: "27",
      city: "Ponda",
    },
    {
      id: Math.floor(Math.random()*100),
      name: "Sunil",
      age: "26",
      city: "Mapsa",
    },
  ]);
  const [userTobeEdited, setUsertTobeEdited] = useState({});

  function addNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  function modalStatus(status, id) {
    setAddUser(status);
    setUsertTobeEdited(users.filter(user => user.id === id)[0])
  }

  function updateUser(user) {
    let temp = users.map((ele) => {
      if(ele.id === user.id){
        return user;
      }
    });
    setUsers(temp);
  }


  return (
    <div className="App">
      { addUser ? <AddUser modalStatus={modalStatus} addNewUser={addNewUser} userTobeEdited={userTobeEdited} updateUser={updateUser} /> : <></>}
      <UsersTable modalStatus={modalStatus} users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
