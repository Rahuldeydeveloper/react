import { usestate } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function App() {

  

  return (
    <>

    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<br />
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
<Button variant="contained" disableElevation>
  Disable elevation
</Button>
<br />
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<br />
<Button variant="outlined" color="error">
  Error
</Button>
    </Stack>
     <FormControl>
     <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
  
     <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
       <FormControlLabel value="female" control={<Radio />} label="Female" />
       <FormControlLabel value="male" control={<Radio />} label="Male" />
       <FormControlLabel value="other" control={<Radio />} label="Other" />
     </RadioGroup>
   </FormControl>
    </>
  );
}
