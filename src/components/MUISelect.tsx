import { Box, TextField, MenuItem } from '@mui/material';
import {useState} from "react";

export const MUISelect = ()=>{
    const [countries, setCountries] = useState<string[]>([]);
    console.log(countries)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value
        setCountries(typeof value ==="string"? value.split(","):value);
    }
    return (
        <Box width="150px" >
            <TextField size="small" color="secondary" SelectProps={{multiple:true}} fullWidth  label="Select country" select value={countries} helperText={countries} onChange={handleChange}>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="Tu">Turkey</MenuItem>
                <MenuItem value="Po">Poland</MenuItem>
                <MenuItem value="Is">Israel</MenuItem>
                <MenuItem value="Ca">Canada</MenuItem>
            </TextField>
        </Box>
    )
}