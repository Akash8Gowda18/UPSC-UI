import React from "react";
import "./recombooks.css";
import {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
} from "./import";

// url and title imported from books

const Books = () => {
  return (
    <div className="ecom__books section__padding " >
      <div className="ecom__books-heading">
        <h2>Recommended Books</h2>
      </div>
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
          <button type="button">Buy Now</button>
          </div>
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

        <div className="ecom__books-image">
          <img src={book3} alt="book1" />
          <div>
            <p>
            Indian Art and Culture 
( English| 4th Edition)
UPSC | Civil Services Exam
State Administrative Exams
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="ecom__books-image">
          <img src={book4} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams{" "}
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="ecom__books-image">
          <img src={book5} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams{" "}
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

      </div>

      <div className="ecom__books-container ">
        <div className="ecom__books-image">
          <img src={book6} alt="book1" />
          <div>
            <p>
              Indian Polity ( English| 6th Revised Edition) UPSC | Civil
              Services Exam State Administrative Exams
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="ecom__books-image">
          <img src={book7} alt="book1" />
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

        <div className="ecom__books-image">
          <img src={book8} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams{" "}
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="ecom__books-image">
          <img src={book4} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams{" "}
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

        <div className="ecom__books-image">
          <img src={book5} alt="book1" />
          <div>
            <p>
              World History ( English 2nd Edition) | UPSC Civil Services Exam
              State Administrative Exams{" "}
            </p>
          </div>
          <div>
          <h5>Rs.300</h5>
          <button type="button">Buy Now</button>
          </div>
        </div>

      </div>

      <div className="ecom__books-view">
        <button type="button">
          View More
        </button>
      </div>


    </div>
  );
};

export default Books;
