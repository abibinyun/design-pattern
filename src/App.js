import { useState } from "react";
import { ControlledOnboardingFlow } from "./2-controlled-uncontrolled/ControlledOnboardingFlow";
import { UncontrolledOnboardingFlow } from "./2-controlled-uncontrolled/UncontrolledOnboardingFlow";
// import LayoutComponent from "./1-layout-component";
// import { ControlledModal } from "./2-controlled-uncontrolled/ControlledModal";
// import { UncontrolledModal } from "./2-controlled-uncontrolled/UncontrolledModal";
// import { ControlledForm } from "./2-controlled-uncontrolled/ControlledForm";
// import { UncontrolledForm } from "./2-controlled-uncontrolled/UncontrolledForm";

const StepOne = ({ goToNext }) => (
    <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
)
const StepTwo = ({ goToNext }) => (
    <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
)
const StepThree = ({ goToNext }) => (
    <>
    <h1>Step 3</h1>
    <p>Congrats !</p>
    <button onClick={() => goToNext({})}>Next</button>
    </>
)
const StepFour = ({ goToNext }) => (
    <>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
)

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = stepData => {
      setOnboardingData({...onboardingData, ...stepData});
      setCurrentIndex(currentIndex + 1)
}

  return (
    <>
      {/* <LayoutComponent /> */}
      {/* <UncontrolledForm />
      <ControlledForm /> */}
      {/* <UncontrolledModal /> */}
      {/* <ControlledModal
            shouldShow={shouldShowModal}
            onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
          {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button> */}

      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={onNext}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>

    </>
  );
}

export default App;
