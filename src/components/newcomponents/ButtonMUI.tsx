import React from 'react'
import Button from '@mui/material/Button';
import { IconButton, Stack } from '@mui/material';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import SendIcon from '@mui/icons-material/Send';
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function ButtonMUI() {
  return (
    <div>
      <Stack spacing={4} direction={"column"}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="text">Text</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
    <Button variant="text" color='secondary'>Text</Button>
    <Button variant="outlined" color='secondary'>Outlined</Button>
    <Button variant="contained" color='secondary'>Contained</Button>
    <Button variant="contained" color='warning'>warning</Button>
    <Button variant="contained" color='info'>Info</Button>
    <Button variant="contained" color='success'>warning</Button>
    <Button variant="contained" color='warning'>Warning</Button>
    <Button variant="contained" color='primary'>Primary</Button>
    <Button variant="contained" color='error'>Error</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
      <Button variant="text" color='secondary'>Text</Button>
    <Button variant="outlined" color='secondary'>Outlined</Button>
    <Button variant="outlined" color='secondary'>Contained</Button>
    <Button variant="outlined" color='warning'>warning</Button>
    <Button variant="outlined" color='info'>Info</Button>
    <Button variant="outlined" color='success'>warning</Button>
    <Button variant="outlined" color='warning'>Warning</Button>
    <Button variant="outlined" color='primary'>Primary</Button>
    <Button variant="outlined" color='error'>Error</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
      <Button variant="text" color='secondary'>Outlined</Button>
    <Button variant="text" color='secondary'>Contained</Button>
    <Button variant="text" color='warning'>warning</Button>
    <Button variant="text" color='info'>Info</Button>
    <Button variant="text" color='success'>warning</Button>
    <Button variant="text" color='warning'>Warning</Button>
    <Button variant="text" color='primary'>Primary</Button>
    <Button variant="text" color='error'>Error</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
      <Button variant="contained" size="small" color='secondary'>Outlined</Button>
    <Button variant="contained"  size="medium" color='secondary'>Contained</Button>
    <Button variant="contained" size="large" color='warning'>warning</Button>
    <Button variant="contained" size="large" color='info'>Info</Button>
    <Button variant="contained" size="large" color='success'>warning</Button>
    <Button variant="contained" size="large" color='warning'>Warning</Button>
    <Button variant="contained" size="small" color='primary'>Primary</Button>
    <Button variant="contained" size="medium" color='error'>Error</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button startIcon={<ScheduleSendIcon />} variant="contained" color='secondary'>Outlined</Button>
        <Button endIcon={<SendIcon />} variant="contained" color='secondary'>Contained</Button>
        <Button startIcon={<AddLocationIcon />} variant="contained" color='warning'>warning</Button>
        <Button startIcon={<AddLocationIcon />} variant="contained" color='info'>Info</Button>
        <Button endIcon={<AddLocationIcon />} variant="contained" color='success'>warning</Button>
        <Button startIcon={<AddLocationIcon />} variant="contained" color='warning'>Warning</Button>
        <Button endIcon={<AddLocationIcon />} variant="contained" color='primary'>Primary</Button>
        <Button startIcon={<AddLocationIcon />} variant="contained" color='error'>Error</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
      <IconButton><SendIcon/></IconButton>
      <IconButton color='warning'><AddLocationIcon/></IconButton>
      <IconButton size='large' color='error'><ScheduleSendIcon/></IconButton>
      <IconButton><SendIcon/></IconButton>
      </Stack>
      </Stack>
    </div>
  )
}
