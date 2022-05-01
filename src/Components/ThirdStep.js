import { Button, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';


export default function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField label="City" value={userData['city']} onChange={(e) => setUserData({...userData, "city" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Landmark" value={userData['landmark']} onChange={(e) => setUserData({...userData, "landmark" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Postal Code" value={userData['postalcode']} onChange={(e) => setUserData({...userData, "postalcode" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div >
            <div className='buttons'>
                <Button variant="contained" color="secondary" onClick={() => setStep(2)}>Back</Button>
                <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
            </div>
        </div>
    )
}
