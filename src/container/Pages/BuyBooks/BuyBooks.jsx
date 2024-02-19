import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import book2 from '../../../Assests/books/image 36.png';  

const BuyBooks = () => {
  return (
    <>
      <div >
        <Navbar/>
      </div>

       <div className="ecom__books-image">
          <img src={book2} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

    <div>
    <Footer/>
    </div>


    </>
  )
}

export default BuyBooks
