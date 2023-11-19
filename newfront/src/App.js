import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Userlogin from './components/Userlogin';
import Usersignup from './components/Usersignup';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Adminlogin from './components/admin/Adminlogin';
import AdminHome from './components/admin/Adminhome';
import AdminProfile from './components/admin/AdminProfile';
import Create from './components/admin/Create';
import EditUser from './components/admin/EditUser';
import DeleteUser from './components/admin/DeleteUser';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
              <Route path="/login" element={<Userlogin />} />
              <Route path="/" element={<Usersignup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/adminlogin" element={<Adminlogin/>}/>
              <Route path="/adminhome" element={<AdminHome/>}/>
              <Route path="/admin-profile" element={<AdminProfile/>}/>
              <Route path="/create" element={<Create/>}/> 
              <Route path="/edit/:id" element={<EditUser/>}/>
              <Route path="/delete/:id" element={<DeleteUser/>}/>

          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
