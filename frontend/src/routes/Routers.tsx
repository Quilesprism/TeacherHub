import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home/Home.tsx";
import Login from "../pages/Login/Login.tsx";
import Register from "../pages/Register/Register.tsx";
import HomeUser from "../pages/Home-user/Home-user.tsx";
import Courses from "../pages/Courses/Courses.tsx";
import Teachers from "../pages/Teachers/Teachers.tsx";
import User from "../pages/User/User.tsx";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home-user' element={<HomeUser />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/user' element={<User />} />
                <Route path='/teachers' element={<Teachers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;