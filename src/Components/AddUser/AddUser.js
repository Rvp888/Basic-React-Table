
import React from 'react';
import './AddUser.css';

export default function AddUser() {


    return (
        <div className='addUser'>
            <h2 className='addUser_heading'>Add User</h2>
            <form className='addUser_form'>
                <label htmlFor='Name' className='addUser_label' >Name</label>
                <br/>
                <input type='text' className='addUser_input' />
                <br/>
                <label htmlFor='Age' className='addUser_label' >Age</label>
                <br/>
                <input type='number' className='addUser_input' />
                <br/>
                <label htmlFor='City' className='addUser_label' >City</label>
                <br/>
                <input type='text' className='addUser_input' />
                <br/>
                <button className='add-btn'>Add</button>
                <button className='cancel-btn'>Cancel</button>
            </form>
        </div>
    )
}

