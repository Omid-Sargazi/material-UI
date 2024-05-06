import React from 'react';
import { Stack, TextField } from '@mui/material';


export default function TextFieldMUI() {
  return (
    <Stack spacing={4} direction={"column"}>
        <Stack spacing={2} direction={"row"}>
            <TextField label="Name" variant='standard'/>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant='filled'/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField size='small' color="error" label="Name" variant='standard'/>
            <TextField size='small' color="error" label="Name" variant="outlined"/>
            <TextField size='small' color="error" label="Name" variant='filled'/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField size='small' color="error" label="Small error" variant='standard'/>
            <TextField size='medium' color="warning" label="large warning" variant="outlined"/>
            <TextField size='small' color="error" label="Name" variant='filled'/>
        </Stack>
        <Stack spacing={2} direction={"row"}>
            <TextField size='small' color="success" label="Enter Name" required variant='standard'/>
            <TextField size='medium' color="warning" label="passowrd" type='password' helperText="Please enter password" variant="outlined"/>
            <TextField size='small' disabled color="error" label="LastName" helperText="Your last name is to be " variant='filled'/>
            <TextField label="Read Only" InputProps={{readOnly:true}}/>
        </Stack>
    </Stack>
  )
}
