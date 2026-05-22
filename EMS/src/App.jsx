import {Toaster} from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import Employees from './pages/Employees.jsx'
import Attendance from './pages/Attendance.jsx'
import Leave from './pages/Leave.jsx'
import Payslips from './pages/Payslips.jsx'
import LoginLanding from './pages/LoginLanding.jsx'
import Settings from './pages/Settings.jsx'
import Layout from './pages/Layout.jsx'
import { Navigate } from 'react-router-dom'
import PrintPayslip from './pages/PrintPayslip.jsx'
const App = () => {
  return (
    <>
    <Toaster />
    <Routes>
      <Route path='/login' element={ <LoginLanding/> } />
      <Route element= {<Layout />}>
          <Route path='/dashboard' element= {<Dashboard />}/>
          <Route path='/employees' element= {<Employees />}/>
          <Route path='/attendance' element= {<Attendance />}/>
          <Route path='/leave' element= {<Leave />}/>
          <Route path='/payslips' element= {<Payslips />}/>
          <Route path='/settings' element= {<Settings />}/> 
      </Route>
      <Route path='/print/payslips/:id' element = { <PrintPayslip/>}/>
      <Route path='*' element = {<Navigate to='/dashboard' replace />}/>
    </Routes>
    </>
  )
}

export default App
