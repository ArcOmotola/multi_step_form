import { Button, TextField } from '@material-ui/core';

export default function SecondStep() {
    return (
        <div>
            <div>
                <TextField label="First name" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Last name" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Contact  Number" margin="normal" variant="outlined" color="secondary"/>
            </div>
            <Button variant="contained" color="primary">Next</Button>
        </div>
    )
}
