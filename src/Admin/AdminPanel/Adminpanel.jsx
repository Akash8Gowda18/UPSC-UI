import React from 'react';
import './adminpanel.css';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";



        
const Adninpanel = () => {

//   // Example of a data array that
// // you might receive from an API
const data = [
  { url: "/", name:"Home", edit: "Edit",  },
  { url: "/Post",  name:"Post", edit: "Edit" },
  { url: "/contact",  name:"Contact",edit: "Edit" },
]


  return (
    <div className="ecom section__padding">
    <div className="ecom__adminpanel-leftcol ">
        <h2>Admin Panel</h2>
        <div className="ecom__adminpanel-list">
        <ul>
          <li>Option</li>
          <li>Add Products</li>
          <li>Posts</li>
          <li>Modules</li>
          <li>Add Discount</li>
          <li>Mailing List</li>
        </ul>   
        </div>
        <div className='ecom__adminpanel-button'>
          <button>Logout</button>
        </div>
    </div>
    
     <div className="ecom__adminpanel-rightcol">
      <div className="ecom__adminpanel-rightheader">
      <h2>Navigation Links </h2>
      <br/>
      <p>Changes</p>
      </div>

      <div className="ecom__adminpanel-rightcol-table">
            <table>
                <tr>
                    <th>URL</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Move</th>
                    <th>Visible</th>
                    <th>Delete</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.url}</td>
                            <td>{val.name}</td>
                            <td><button >{val.edit}</button></td>
                            <td><button ><FaAngleUp/><br/><FaAngleDown/></button></td>
                            <td><button >Visible</button></td>
                            <td><button >Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>

        <div className='ecom__adminpanel-links'>
          <div className='ecom__adminpanel-links-head'>
            <h2>Quick Links</h2>
          </div>
         <div className='ecom__adminpanel-links-buttons'>
          <button>Link Static Page</button>
          <button>Link Post</button>
          <button>Link Modules</button>
         </div>

         <div className='ecom__adminpanel-links-head'>
            <h2>Add New  Links</h2>
          </div>

        <div className='ecom__adminpanel-addlink'>
          <input type='text' placeholder='Url' />
          <input type='text' placeholder='Name' />
          <button>Add</button>
        </div>

        <div className='ecom__adminpanel-links-head'>
            <h2>Options</h2>
          </div>
        
        <div className='ecom__adminpanel-space'>
          <h4>Navigation Link Spacer   <button>Wider Spaces</button></h4>
          <p>Set the spacing between the navigation links </p>
        </div>

        <div className='ecom__adminpanel-save'>
          <button>Save</button>
        </div>


        </div>
    

     </div>
     </div>
   
  )
}

export default Adninpanel
