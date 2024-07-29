import { useState } from "react"

const messages = [
  'Apply for jobs 💼', 
  'Do some push-ups 💪',
  'Visit your brother 👨‍👩‍👧‍👦'
  ]
export default function App(){
  const[isOpen,setIsOpen] = useState(true);
  return (

    <div className="container">
      <div className="btn-main" onClick={()=>setIsOpen(isOpen=>!isOpen)}>❌</div>

      {isOpen && <Steps data={messages} />}
      
    </div>
  )
}

function Steps({data}){
  const [step,setStep]  = useState(0);

  function handleNext(){
    if(step>=0) setStep(step=>step+1)
    if(step>data.length-2) setStep(0);
  }
  
  function handlePrev(){
    if(step>0) setStep(step=>step-1)
    if(step===0) setStep(data.length-1);
  }
  
  return (
    <div className="steps-container">
      <div className="btn-box">
        
        <button className={`btn ${step === 0? 'active': null}`}>1</button>
        <button className={`btn ${step === 1? 'active': null}`}>2</button>
        <button className={`btn ${step== 2? 'active': null}`}>3</button>
      </div>
      <p className="step">{data[step]}</p>

      <div className="nav-btn-box">
        <button className="nav-btn" onClick={handlePrev}>Previous</button>
        <button className="nav-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}