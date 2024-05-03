import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormGroup, FormLabel } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



export default function CheckBox() {

  const [accept, setAccet] = useState(false);
  console.log(accept)
  
    
  return (
    <Box>
  <Box>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </Box>
    <Box>
    <FormGroup >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControlLabel   control={<Checkbox />} label="Required" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    </Box>
    <Box>
      <FormLabel>Skills</FormLabel>
      <FormGroup >
      <FormControlLabel
        control={<Checkbox checked={accept} onChange={(e) => setAccet(e.target.checked)} />}
        label="HTML"
      />
      <FormControlLabel
        control={<Checkbox checked={accept} onChange={(e) => setAccet(e.target.checked)} />}
        label="CSS"
      />
      <FormControlLabel
        control={<Checkbox checked={accept} onChange={(e) => setAccet(e.target.checked)} />}
        label="React"
      />
      <FormControlLabel
        control={<Checkbox checked={accept} onChange={(e) => setAccet(e.target.checked)} />}
        label="JAVA"
      />
      <FormControlLabel
        control={<Checkbox checked={accept} onChange={(e) => setAccet(e.target.checked)} />}
        label="Next"
      />
      </FormGroup>
    </Box>
    </Box>
  )
}
