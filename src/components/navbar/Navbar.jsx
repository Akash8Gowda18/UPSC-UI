import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo1 from '../../Assests/Logo1.png';
import './navbar.css';
import { Outlet, Link } from "react-router-dom";


//for reuseble code  make const menu use code by <Menu/> further  
// # links are connected to ids for redirect pages

const Menu = () => (
  <>
  <Link to="/"><p><a href='#home'>HOME</a></p></Link>
 <p><a href='#Books'>BOOKS</a></p>
  <p><a href='#GeneralStudies'>GENERAL STUDIES</a></p>
  <p><a href='#TestSeries'>TEST SERIES</a></p>
  <p><a href='#CurrentAffairs'>CURRENT AFFAIRS</a></p>
  <p><a href='#OptionalSubjects'>OPTIONAL SUBJECTS</a></p>
  <p><a href='#WallCharts'>WALL CHARTS</a></p>
  </>
)




//Bem --> Block Element Modifier 

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false);
  
// className='ecom__navbar' for laptop view  & className='ecom__navbar-menu' for mobile view  toggle

  return (
    <div className='ecom__navbar'>
      <div className='ecom__navbar-links'>
       <div className='ecom__navabar-links_logo'>
        <img src={logo1} alt='logo' />
       </div>
       <div className='ecom__navbar-links_container'>
        <Menu/>
       </div>
       </div>
       <div className='ecom__navbar-cart'>
       <Link to="/cart">
       <FaCartArrowDown color='#fff' size={27} />
       </Link>
      </div>
      <Outlet />
      
      <div className="ecom__navbar-user">
      <Link to="/login">
      <FaUser color="#fff" size={27} />
      </Link>
      </div>
      <Outlet />
     
      
       <div className='ecom__navbar-menu'>
        {toggleMenu 
         ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) }/>
         : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) }/>
        }
        {toggleMenu && (
          <div className='ecom__navbar-menu_container scale-up-center'>
            <div className='ecom__navbar-menu_container-links'>
               <Menu />

            </div>
          </div>
        )}

       </div>
    </div>
  )
}

export default Navbar

