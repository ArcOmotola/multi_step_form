import { Button, TextField } from '@material-ui/core';


export default function ThirdStep() {
  return (
    <div>
        <div>
            <TextField label="City" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
            <TextField label="Landmark" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <div>
            <TextField label="Postal Code" margin="normal" variant="outlined" color="secondary"/>
        </div>
        <Button variant="contained" color="primary">Next</Button>
    </div>
  )
}
