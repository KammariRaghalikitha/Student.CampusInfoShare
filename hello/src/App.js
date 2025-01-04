import {Routes,Route} from 'react-router-dom'
import Firstpage from './component/firstpage';
import Login from './component/Login';
import Signup from './component/signup';
import Middle from './component/middlepage'
import {AuthProvider} from './component/auth';
import AddEmployee from './component/AddEmployee';
import RequiredAuth from './component/RequiredAuth';
import Employee1 from './component/Employee';
import Employee2 from './component/AdminPage';
import AddEmployee2 from './component/AddInternships';
import Employee5 from './component/Employeeinternship';
import Employee6 from './component/AdminPageInternship';
import AddEmployee1 from './component/AddProjects';
import Employee3 from './component/Employeeproject';
import Employee4 from './component/AdminPageProject';
import AddEmployee3 from './component/AddEvents';
import Employee7 from './component/EmployeeEvents';
import AdminPage from './component/AdminPage';
import Employee8 from './component/AdminEvents';
import Profile from './component/Profile';
import Adminlogin from './component/AdminLogin1';
import Middle2 from './component/AdminHomePage'
function App() {
  return (
    <div className="App">
         <AuthProvider>
          <Routes>
            <Route path='/' element = {<Firstpage/>}></Route>
            <Route path='/Login' element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Middle" element={<Middle/>}/>
            <Route path="/Post" element={<AddEmployee/>}/>
            <Route path="/Apply" element={<Employee1/>}/>
            <Route path="/AdminJApply" element={<Employee2/>}/>
            <Route path="/ProjectPost" element={<AddEmployee1/>}/>
            <Route path="/ProjectApply" element={<Employee3/>}/>
            <Route path="/AdminPApply" element={<Employee4/>}/>
            <Route path="/InternshipPost" element={<AddEmployee2/>}/>
            <Route path="/InternshipApply" element={<Employee5/>}/>
            <Route path="/AdminIApply" element={<Employee6/>}/>
            <Route path="/EventPost" element={<AddEmployee3/>}/>
            <Route path="/EventApply" element={<Employee7/>}/>
            <Route path="/AdminEApply" element={<Employee8/>}/>
            <Route path="/profile" element={<RequiredAuth><Profile/></RequiredAuth>}/>
            <Route path="/Admin" element={<AdminPage/>}/>
            <Route path="/AdminLogin" element={<Adminlogin/>}></Route>
            <Route path="/admin-home-page" element={<Middle2/>}></Route>
           {/* <Route path="/adminlogin" element={<Adminlogin/>}/>*/}
         </Routes>
       
       </AuthProvider>
      
    </div>
  );
  }
  export default App;