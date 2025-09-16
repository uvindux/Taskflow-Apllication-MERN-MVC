import { Button, Grid, Input, Typography } from '@mui/material'
import React, { useState } from 'react'

function UserForm() {
  const [id, setId] = useState(0);
  const [name, setname] = useState("");
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: 'white',
        marginBottom: '1rem',
        display: 'block',
      }

      }
    >
      <Grid item xs={12} sx={{ marginTop: '10px', marginBottom: '10px' }}>
        <Typography component={"h1"} sx={{ color: "#000000", fontSize: "20px", fontStyle: "bold" }}>Add your details</Typography>

      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component={"label"} sx={{ color: "#000000", marginRight: '20px', fontSize: '16px', width: '100px', display: 'block' }}>ID</Typography>
        <Input placeholder='Enter ID' type='number' name='id' id='id' sx={{ width: '400px' }} value={"id"} onChange={e => { setId(e.target.value) }}></Input>
      </Grid>
      {/*creating form things*/}

      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component={"label"} sx={{ color: "#000000", marginRight: '20px', fontSize: '16px', width: '100px', display: 'block' }}>Name</Typography>
        <Input placeholder='Enter Name' type='text' name='name' id='name' sx={{ width: '400px' }} value={name} onChange={e => {setname(e.target.value) }}></Input>
      </Grid>
      <Button sx={{ margin: 'auto', marginBottom: '10px', backgroundColor: '#0d8a9dff', color: "white", marginTop: "10px", '&:hover': { opacity: "0.7", background: "#19d3f0ff" }, width: "130px", marginTop: "20px" }}>

        Add
      </Button>
    </Grid>



  )

}


export default UserForm