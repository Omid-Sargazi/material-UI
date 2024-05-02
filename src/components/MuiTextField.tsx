import {useState} from "react";
import {Stack, TextField, InputAdornment} from "@mui/material";
export const MuiTextField = ()=>{
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <Stack spacing={4} >MuiTextField
            <Stack direction="row" spacing={2} >
            <TextField error={!value} helperText={!value ? "Enter A value" : "Bravo for entering a value"} id="outlined-basic" value={value} onChange={(e)=>setValue(e.target.value)} label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Small Secondary" size="small" color="secondary"/>
                <TextField label="Medium warning" size="medium" color="warning"/>
                <TextField label="Large Success"  color="success"/>
            </Stack>
            <Stack direction="row" spacing={2}>

                <TextField required label="Form Input" type="number "/>
                <TextField required label="Form Input" helperText="Do not share your password with anyone..."/>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField required label="password" type="password" helperText="enter your password"/>
                <TextField required label="name" helperText="enter your name" disabled/>
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField label="Amount" InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}/>

                <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position="end">kg</InputAdornment>}} />
            </Stack>
        </Stack>
    )
}