import React, { useState, useEffect } from 'react';
import UserForm from './Components/userForm/UserForm';
import UsersTable from './Components/userTable/UsersTable';
import { Box } from '@mui/material';
import Axios from 'axios';

const Users = () => {
  const [submitted,setsubmitted] = useState(false);
  const [users, setUsers] = useState([]);
  const[selectedUser,SetselectedUser ] =useState({});
  const[isEdite,setIsEdite]=useState(false);


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
       
       fetchUsers();  
       setsubmitted(false); 
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
    
  };


  const updateUser=(data)=>{

    setsubmitted(true);
    const payload ={
      id: data.id,
      name:data.name,
    }
     Axios.post ('http://localhost:3000/api/updateuser',payload)
     .then(response => {
       
       fetchUsers();  
       setsubmitted(false); 
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
    


  }
  const DeleteUSer=(data)=>{
   
     Axios.post ('http://localhost:3000/api/deleteuser',data)
     .then(response => {
       
       fetchUsers();  
     
      })
      .catch(error => {
        console.error('Error fetching users: ', error);
      });
    

  }

  return (
    <Box sx={{ width: 'calc(100% - 100px)', margin: 'auto', marginTop: '100px' }}>
      <UserForm addUser= {AddUser} UpdateUser ={updateUser}
      Submitted={submitted} data={selectedUser} IsEdite={isEdite}/> {/* optional: pass refresh function */}
      <UsersTable 
      rows={users} 
      selectedUser ={data =>{
        SetselectedUser(data);
        setIsEdite(true);

      }} 
      DeleteUSer={data => window.confirm("Are you sure")&& DeleteUSer(data)}
      />

       
     
    </Box>
  );
};

export default Users;
  