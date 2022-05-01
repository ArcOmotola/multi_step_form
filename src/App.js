import './App.css';
import FirstStep from "./Components/FirstStep";
import SecondStep from './Components/SecondStep';
import ThirdStep from './Components/ThirdStep';
import { Stepper, StepLabel, Step} from '@material-ui/core';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';


function App() {

  const { currentStep, finalData } = useContext(multiStepContext)

  function showStep(step) {
    // eslint-disable-next-line default-case
    switch(step) {
      case 1 :
        return <FirstStep />
      case 2 :
        return <SecondStep />
      case 3 :
        return <ThirdStep />
    }
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h3 style={{color:'red'}}>React Multi Step Application</h3>
        <div className='center-stepper'>
          <Stepper style={{width: '18%'}} activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>

        { showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
