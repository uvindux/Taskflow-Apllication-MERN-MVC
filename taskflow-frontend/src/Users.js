import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import Axios from 'axios';

const Users = () => {
  const [submitted,setsubmitted] = useState(false);
  const [users, setUsers] = useState([]);

  // Fetch users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch users from backend
  const fetchUsers = () => {
    Axios.get('http://localhost:3000/api/users')  // ✅ added missing //
      .then(response => {
        console.log(response.data); // ✅ show real data
        setUsers(response.data);    // ✅ update state
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  const AddUser = (data)=>{
    setsubmitted(true);
    const payload ={
      id: data.id,
      name:data.name,
    }
    Axios.post ('http://localhost:3000/api/createuser',payload)
     .then(response => {
        // console.log(response.data); // ✅ show real data
        setUsers(response.data.response);    // ✅ update state
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
    
  };

  return (
    <Box sx={{ width: 'calc(100% - 100px)', margin: 'auto', marginTop: '100px' }}>
      <UserForm refreshUsers={fetchUsers} /> {/* optional: pass refresh function */}
      <UsersTable rows={users} />
    </Box>
  );
};

export default Users;
  