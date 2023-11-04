import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home/Home.tsx";
import HomeUser from "../pages/Home-user/Home-user.tsx";
import Courses from "../pages/Courses/Courses.tsx";
import Teachers from "../pages/Teachers/Teachers.tsx";
import UserInfo from "../pages/User-info/userInfo.tsx";
import TeacherListByCourse from "../pages/Teachers-list-by-course/TeacherListByCourse.tsx";
import TeacherProfileByCourse from "../pages/Teacher-profile-by-course/TeacherProfileByCourse.tsx";
import TeachersCourses from "../pages/TeachersCourses/TeachersCourses.tsx";
import HomeAdmin from "../pages/Home-admin/HomeAdmin.tsx";
import UsersAdmin from "../pages/Users-admin/UsersAdmin.tsx";
import CoursesAdmin from "../pages/Courses-admin/CoursesAdmin.tsx";
import TeachersAdmin from "../pages/Teachers-admin/TeachersAdmin.tsx";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/home-user' element={<HomeUser />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/teachers' element={<Teachers />} />
                <Route path='/user-info' element={<UserInfo />} />
                <Route path='/teachers-list-by-course' element={<TeacherListByCourse />} />
                <Route path='/teachers-profile-by-course' element={<TeacherProfileByCourse />} />
                <Route path='/teachers-courses' element={<TeachersCourses />} />
                <Route path='/home-admin' element={<HomeAdmin />} />
                <Route path='/users-admin' element={<UsersAdmin />} />
                <Route path='/teachers-admin' element={<TeachersAdmin />} />
                <Route path='/courses-admin' element={<CoursesAdmin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;