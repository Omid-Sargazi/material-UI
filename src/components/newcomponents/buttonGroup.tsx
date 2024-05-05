import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material';
export default function buttonGroup() {
  return (
   <Stack direction={"column"} spacing={4}>
     <Stack direction={"row"}>
      <ButtonGroup variant='contained'>
      <Button  color='primary'>Left</Button>
      <Button  color='secondary'>Center</Button>
      <Button  color='warning'>Right</Button>
      <Button  color='info'>Info</Button>
      <Button  color='success'>Success</Button>
      <Button  color='warning'>Warning</Button>
      <Button  color='primary'>Primary</Button>
      <Button  color='error'>Error</Button>
      </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
      <ButtonGroup variant='outlined'>
      <Button  color='primary'>Left</Button>
      <Button  color='secondary'>Center</Button>
      <Button  color='warning'>Right</Button>
      <Button  color='info'>Info</Button>
      <Button  color='success'>Success</Button>
      <Button  color='warning'>Warning</Button>
      <Button  color='primary'>Primary</Button>
      <Button  color='error'>Error</Button>
      </ButtonGroup>
      </Stack>
      <Stack direction={"row"}>
      <ButtonGroup variant='text' orientation='vertical' size="large" color='success'>
      <Button  color='primary'>Left</Button>
      <Button  color='secondary'>Center</Button>
      <Button  color='warning'>Right</Button>
      <Button  color='info'>Info</Button>
      <Button  color='success'>Success</Button>
      <Button  color='warning'>Warning</Button>
      <Button  color='primary'>Primary</Button>
      <Button  color='error'>Error</Button>
      </ButtonGroup>
      </Stack>
    
   </Stack>
  )
}
