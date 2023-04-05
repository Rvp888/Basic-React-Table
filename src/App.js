
import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import UsersTable from './Components/UsersTable/UsersTable';
import { useEffect } from 'react';

function App() {

  const [addUser, setAddUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [userTobeEdited, setUsertTobeEdited] = useState({});


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  },[users]);

  function addNewUser(newUser) {
    setUsers((users) => [...users, newUser]);
  }

  function modalStatus(status, id) {
    setAddUser(status);
    setUsertTobeEdited(users.filter(user => user.id === id)[0])
  }

  function updateUser(id,name,age,city) {
    let temp = users.map((ele) => {
      if(ele.id === id){
        return {
          id,name,age,city
        };
      }
      return ele;
    });
    setUsers(temp);
  }

  function deleteUser(id) {
    let temp = users.filter(user => user.id !== id);
    setUsers(temp);
  }


  return (
    <div className="App">
      { addUser ? <AddUser modalStatus={modalStatus} addNewUser={addNewUser} userTobeEdited={userTobeEdited} updateUser={updateUser} /> : <></>}
      <UsersTable modalStatus={modalStatus} users={users} setUsers={setUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
