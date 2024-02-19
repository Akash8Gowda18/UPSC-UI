
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './container/header/Header';
import RecomBooks from './container/RecomBooks/RecomBooks';
import Potential from './container/potential/Potential';
import Course from './container/course/Course';
import UserExperience from './container/userexperience/UserExperience';
import Experience from './container/experience/Experience';
import Footer from './components/footer/Footer';
import Categories from './container/categories/Categories';
// import Adminlogin from './Admin/AdminLogin/AdminLogin';




function App() {
  return (
    <>
    <div className="App">
     <Navbar/>
     <Header/>
     <Categories/>
     <RecomBooks/>
     <Potential/>
     <Course/>
     <UserExperience/>
     <Experience/>
     <Footer/>
    </div>

{/* <Adminlogin/> */}


    </>

    
   

  );
}

export default App;
