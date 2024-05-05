import React, { MouseEvent, useState } from 'react'
import { ToggleButton, Button, ButtonGroup, Stack, IconButton, ToggleButtonGroup } from '@mui/material'

import SendIcon from '@mui/icons-material/Send';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function ToggleButtonMUI() {
    const [format, setFormat] = useState<string|null>(null);
    console.log(format);
    const handleFormatChange = (event: React.MouseEvent<HTMLElement>,updatedFormats:string|null) => {
        setFormat(updatedFormats);
    }
  return (
    <Stack spacing={2} direction={"column"}>
        <Stack direction={"row"}>
            <ToggleButtonGroup size='small' color='success' orientation='vertical' aria-label='text formatting' value={format} onChange={handleFormatChange}>
                    <ToggleButton aria-label='bold' value="bold"><FormatBoldIcon/></ToggleButton>
                    <ToggleButton aria-label='italic' value="italic"><FormatItalicIcon/></ToggleButton>
                    <ToggleButton aria-label='underlined' value="underlined"><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
        <Stack direction={"row"}>
          
        </Stack>
    </Stack>
  )
}
