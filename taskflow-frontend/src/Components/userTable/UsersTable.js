import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import React from 'react'

function UsersTable({ rows,selectedUser, DeleteUSer}) {
   

      return (
            <TableContainer component={Paper}>
                  <Table>
                        <TableHead>
                              <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>​name</TableCell>
                                    <TableCell>Action</TableCell>
                              </TableRow>

                        </TableHead>
                        <TableBody>
                              {rows?.map(row => (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                          <TableCell component='th' scope='row'>{row.id}</TableCell>
                                          <TableCell component='th' scope='row'>{row.name}</TableCell>
                                          <TableCell>
                                                <Button sx={{ margin: '0px 10px' }} onClick={() => { selectedUser({id:row.id,name:row.name}) }}>Update</Button>
                                                <Button sx={{ margin: '0px 10px' }} onClick={() => { DeleteUSer({id :row.id}) }}>Delete</Button>
                                          </TableCell>
                                    </TableRow>
                              ))}



                        </TableBody>
                  </Table>
            </TableContainer>
      )

}
console.log('UserForm Rendered');
export default UsersTable