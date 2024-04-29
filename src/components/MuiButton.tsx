import {Stack,Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ButtonGroup from '@mui/material/ButtonGroup';
export const MuiButton = ()=>{
    return (
   <Stack spacing={4}>

< Stack spacing={2} direction="row">
    <h1>Button MUI</h1>
    <Button variant="text">Text</Button>
    <Button variant="contained" href="https://google.com">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </Stack>

    <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button disabled >Disable</Button>
        <Button color="secondary" >Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained"  color="info" startIcon={<InfoIcon/>}>Info</Button>
        <Button variant="contained" color="success" size="small" startIcon={<CheckCircleOutlineIcon/>}>Success</Button>
        <Button variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
        <Button variant="outlined" startIcon={<SendIcon/>}>Send Email</Button>
        <Button variant="contained" color="warning" startIcon={<CloudUploadIcon/>}>CloudUploadIcon</Button>
    </Stack>

    <Stack display="block" spacing={2} direction="row">
        <Button size="large" variant="outlined" color="warning" startIcon={<ErrorOutlineIcon/>}>Warning</Button>
        <Button size="medium" variant="contained" color="error" startIcon={< InfoIcon/>}>Medium</Button>
        <Button size="small" variant="contained" color="warning">Small</Button>
    </Stack>

    <Stack spacing={2} direction="row">
       <ButtonGroup size="small" color="secondary" variant="text" orientation="vertical" aria-label="Basic button group">
       <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
       </ButtonGroup>
    </Stack>
   </Stack>
    )
}