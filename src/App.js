
import { useState } from 'react';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import UsersTable from './Components/UsersTable/UsersTable';

function App() {

  const [addUser, setAddUser] = useState(true);


  return (
    <div className="App">
      { addUser ? <AddUser /> : <></>}
      <UsersTable setAddUser={setAddUser} />
    </div>
  );
}

export default App;
