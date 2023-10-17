import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { EmployeeCorner } from './components/Employee/EmployeeCorner';
import ServicesTxt from './components/Services/ServicesTxt';
import { Rakes } from './components/Rakes/Rakes';
import { RectifiedDetails } from './components/ErrorRectification/RectifiedDetails';
import { AssistantList } from './components/Employee/AssistantList';
import { Theme } from './components/Theme/Theme';
import { LoadingWitnessForm } from './components/Form.jsx/LoadingWitnessForm';
import { Login } from './components/Form.jsx/Login';
import { Route,Routes } from 'react-router-dom';
import { Home } from './components/Home';
import CIL from './components/AuthorizedPersons/CIL';
import { NTPC } from './components/AuthorizedPersons/NTPC';
import { MPPGCL } from './components/AuthorizedPersons/MPPGCL';
import SCCL from './components/AuthorizedPersons/SCCL';
import { TruckDetails } from './components/UnloadedDetails.jsx/TruckDetails';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/rakes' element={<><Rakes/></>}/>        
        <Route path='/EmployeeCorner' element={<><EmployeeCorner/></>}/>
        <Route path='/*' element={<div>page not found</div>}/>  
        <Route path='/login' element={<Login/>}/>    
        <Route path='/lodingWitnessForm' element={<LoadingWitnessForm/>}/>   
        <Route path='/assistantList' element={<AssistantList/>}/>
        <Route path='/servicesTxt' element={<ServicesTxt/>}/>
        <Route path='/rectifiedDetails' element={<RectifiedDetails/>}/>
      </Routes>
      <Theme/>
      <TruckDetails/>
      <CIL/>
      <NTPC/>
      <MPPGCL/>
      <SCCL/>
      <Footer/>
    </div>
  );
}

export default App;
