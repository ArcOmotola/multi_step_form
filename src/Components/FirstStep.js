import { Button, TextField } from '@material-ui/core'
import { useContext } from 'react'
import { multiStepContext } from '../StepContext'

export default function FirstStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

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
            <Button variant="contained" color="primary" onClick={() => setStep(2)}>Next</Button>
        </div>
    )
}
