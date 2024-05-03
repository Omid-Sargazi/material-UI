import React from 'react';
import { Box, FormControl,FormLabel,FormControlLabel, RadioGroup, Radio } from '@mui/material';

import { useState } from 'react';
export default function RadioButton() {
  const [value, setValue] = useState('');
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  console.log(value)
  return (
    <Box>
      <FormControl>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup row value={value} onChange={handleChange} name="job-experience-group" aria-labelledby='job-experience-group-label'>
            <FormControlLabel value="0-2" control={<Radio size='medium' color='secondary' />} label="0-2" />
            <FormControlLabel value="3-5" control={<Radio />} label="3-5" />
            <FormControlLabel value="6-10" control={<Radio />} label="6-10" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
