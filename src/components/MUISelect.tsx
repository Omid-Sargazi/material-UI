import { Box, TextField, MenuItem } from '@mui/material';
import {useState} from "react";

export const MUISelect = ()=>{
    const [country, setCountry] = useState("");
    console.log(country)
    return (
        <Box width="150px" >
            <TextField fullWidth  label="Select country" select value={country} helperText={country} onChange={(e)=>setCountry(e.target.value)}>
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Turkey">Turkey</MenuItem>
                <MenuItem value="Poland">Poland</MenuItem>
                <MenuItem value="Israel">Israel</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
            </TextField>
        </Box>
    )
}