import React from 'react';
import './allbooks.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import book1 from '../../Assests/books/image 35.png';


const AllBooks = () => {
  return (
   <>
      <div >
        <Navbar/>
      </div>

<div className='ecom__allbooks'>
      <div className="ecom__books-container ">
        <div className="ecom__books-image">
          <img src={book1} alt="book1" />
          <div>
            <p>
              Indian Polity ( English| 6th Revised Edition) UPSC | Civil
              Services Exam State Administrative Exams
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          
          </div>
        </div>
        </div>
      
</div>

<div>
    <Footer/>
</div>





</>
  )
}

export default AllBooks
