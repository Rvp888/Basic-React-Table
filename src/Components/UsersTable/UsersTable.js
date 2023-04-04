
import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import { useState } from 'react';
import './UsersTable.css';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect } from 'react';

export default function UsersTable(props) {

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
  ])
  const columns = ["id", "name", "age", "city"];
  const [sorting, setSorting] = useState({column: "id", order: "asc"});
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchValue,setSearchValue] = useState("");

  function sortTable(newSorting) {
    console.log(newSorting.order);
    setSorting({...newSorting});
  }

  useEffect(() => {
    let tempUsers = [...users];
    
    if (sorting.order === "asc") {
      tempUsers.sort((a,b) => {
        if(a[sorting.column] <= b[sorting.column]){
          return -1;
        }else {
          return 1;
        } 
      })
    }
    else if (sorting.order === "desc") {
      tempUsers.sort((a,b) => {
        if(a[sorting.column] <= b[sorting.column]){
          return 1;
        }else {
          return -1;
        } 
      })
    }      

    setUsers(tempUsers);
  },[sorting]);

  function searchTable(text) {
    text = text.toLowerCase();
    setSearchValue(text);
    let filterUsers = users.filter(user => user.name.toLowerCase().includes(text) || user.id.toString().toLowerCase().includes(text) || user.age.toLowerCase().includes(text) || user.city.toLowerCase().includes(text) );
    setSearchedUsers([...filterUsers]);
  }


  return (
    <div>
      <h1 className='table-heading'>Users Table</h1>

      <div className='activity_cont'>
        <SearchBar searchTable={searchTable} />
        <button className='addUser-btn' onClick={() => props.setAddUser(true)} >+</button>
      </div>
      
      <table className='usersTable'>
        <Header columns={columns} sorting={sorting} sortTable={sortTable} />
        <Content entries={searchValue ? searchedUsers : users} columns={columns} />
      </table>
    </div>
  )
}
