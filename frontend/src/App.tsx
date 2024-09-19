
import './App.css'
import Checkline from './Components/Checkline'
import LineGraph from './Components/LineGraph'
import Salary from './Components/Salary'
import SalaryTable from './Components/SalaryTable'




function App() {
 

  return (
    <div className='flex items-center justify-center h-screen'>


    <Salary/>

    <SalaryTable/>

    
    {/* <Checkline/> */}
   
      
    </div>
  )
}

export default App
