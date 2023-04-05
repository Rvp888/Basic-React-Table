
import React from 'react';
import './AddUser.css';
import { useState } from 'react';

export default function AddUser(props) {

    const [name, setName] = useState(props.userTobeEdited ? props.userTobeEdited.name : '');
    const [age, setAge] = useState(props.userTobeEdited ? props.userTobeEdited.age : '');
    const [city, setCity] = useState(props.userTobeEdited ? props.userTobeEdited.city : '');

    function handlesubmit(e) {
        e.preventDefault();
        props.addNewUser({
            id: Math.floor(Math.random() * 100),
            name,
            age,
            city,
        });
        props.modalStatus(false);
    }

    return (
        <div className='addUser'>
            <h2 className='addUser_heading'>{props.userTobeEdited ? 'Update User' : 'Add User'}</h2>
            <form className='addUser_form' onSubmit={handlesubmit}>
                <label htmlFor='Name' className='addUser_label' >Name</label>
                <br/>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} className='addUser_input' />
                <br/>
                <label htmlFor='Age' className='addUser_label' >Age</label>
                <br/>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} className='addUser_input' />
                <br/>
                <label htmlFor='City' className='addUser_label' >City</label>
                <br/>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)} className='addUser_input' />
                <br/>
                <button className='add-btn'>{props.userTobeEdited ? 'Update' : 'Add'}</button>
                <button className='cancel-btn' onClick={() => props.modalStatus(false)}>Cancel</button>
            </form>
        </div>
    )
}

