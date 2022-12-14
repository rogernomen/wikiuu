import LeftMenu from './Components/LeftMenu';
import InitialPage from './Components/InitialPage';
import { FC } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; 
import styles from './TeacherPage.module.css';
import TeacherCourses from './Components/TeacherCourses';
import CreationCourse from './Components/CreationCourse';

interface Props {

}
const TeacherPage: FC<Props> = () => {
    return (
        <div className={styles.pageContainer}>
            <LeftMenu></LeftMenu>
            <Routes>
                <Route path="" element={<InitialPage></InitialPage>}></Route>
                <Route path="teachercourses" element={<TeacherCourses></TeacherCourses>}></Route>
                <Route path="teachercourses/creationcourse" element={<CreationCourse></CreationCourse>}></Route>
            </Routes>
            <Outlet />
        </div>
    )
}

export default TeacherPage;