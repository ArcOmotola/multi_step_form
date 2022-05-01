import { Button, TextField } from '@material-ui/core';
import { useContext } from 'react';
import { multiStepContext } from '../StepContext';

export default function SecondStep() {
    
    const {setStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div>
            <div>
                <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({...userData, "email" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({...userData, "country" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div>
                <TextField label="District" value={userData['district']} onChange={(e) => setUserData({...userData, "district" : e.target.value})} margin="normal" variant="outlined" color="secondary"/>
            </div>
            <div className='buttons'>
                <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button> <span></span>
                <Button variant="contained" color="primary" onClick={()=>setStep(3)}>Next</Button>
            </div>
        </div>
    )
}
