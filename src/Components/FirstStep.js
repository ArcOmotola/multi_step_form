import { Button, TextField } from '@material-ui/core'
import { useContext } from 'react'
import { multiStepContext } from '../StepContext'

export default function FirstStep() {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField label="First name" value={userData['firstname']} onChange={(e) => setUserData({...userData, "firstname" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Last name" value={userData['lastname']} onChange={(e) => setUserData({...userData, "lastname" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Contact  Number" value={userData['contact']} onChange={(e) => setUserData({...userData, "contact" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div className='button'>
                <Button variant="contained" color="primary" onClick={() => setStep(2)}>Next</Button>
            </div>
        </div>
    )
}
