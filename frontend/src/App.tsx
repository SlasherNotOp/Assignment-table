
import { useState } from 'react'
import './App.css'
import Checkline from './Components/Checkline'
import Salary from './Components/Salary'
import SalaryTable from './Components/SalaryTable'


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  




  const [value,setValue]=useState<string|null>(null);
  const [isActive,SetIsActive]=useState<boolean>(false);

  function clickFunction(text:string){
    


    if(value===null){

      SetIsActive(prev=>!prev)
      toast.info("Table appear");

    } 
    setValue(text)

    toast.success("Table Updated");
 
   
    
  }
  console.log(value)

  

  return (
    <>
    

    <ToastContainer
    position="top-center"
    />

    <div className='flex items-center justify-around h-screen m-5'>

    

    <Salary clickFunction={clickFunction} value={value} />

    <SalaryTable isActive={isActive}  value={value} />

    </div>
    

    <div className='mt-20'>
    <Checkline/>
    
    </div>
    </>
  )
}

export default App
