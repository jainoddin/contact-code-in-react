import './App.css';
import { GoPlus } from "react-icons/go";
import { GoFile } from "react-icons/go";
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiOutlineFileJpg } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";




function App() {
  const data = [
    {
      SL: 1,
      NAME: 'Liza',
      CATEGORY: 'Court reporter',
      MOBILE: '+62 604 204 5795',
      EMAIL: 'laloshechkin0@hhs.gov',
      ACTIONS: 'SELECT'
    },
    {
      SL: 2,
      NAME: 'Randi',
      CATEGORY: 'Clerks',
      MOBILE: '+86 325 752 9714',
      EMAIL: 'rgansbuhlerl@altervista.org',
      ACTIONS: 'SELECT'
    },
    {
      SL: 3,
      NAME: 'Sacha',
      CATEGORY: 'Client',
      MOBILE: '+51 744 817 9445',
      EMAIL: 'stebbe2@plala.or.jp',
      ACTIONS: 'SELECT'
    },
    {
      SL: 4,
      NAME: 'Tabitha',
      CATEGORY: 'Lawyer',
      MOBILE: '+33 221 852 8164',
      EMAIL: 'tvarty3@github.io',
      ACTIONS: 'SELECT'
    },
    {
      SL: 1,
      NAME: 'Liza',
      CATEGORY: 'Court reporter',
      MOBILE: '+62 604 204 5795',
      EMAIL: 'laloshechkin0@hhs.gov',
      ACTIONS: 'SELECT'
    },
    {
      SL: 2,
      NAME: 'Randi',
      CATEGORY: 'Clerks',
      MOBILE: '+86 325 752 9714',
      EMAIL: 'rgansbuhlerl@altervista.org',
      ACTIONS: 'SELECT'
    },
    {
      SL: 3,
      NAME: 'Sacha',
      CATEGORY: 'Client',
      MOBILE: '+51 744 817 9445',
      EMAIL: 'stebbe2@plala.or.jp',
      ACTIONS: 'SELECT'
    },
    {
      SL: 4,
      NAME: 'Tabitha',
      CATEGORY: 'Lawyer',
      MOBILE: '+33 221 852 8164',
      EMAIL: 'tvarty3@github.io',
      ACTIONS: 'SELECT'
    },
    {
      SL: 1,
      NAME: 'Liza',
      CATEGORY: 'Court reporter',
      MOBILE: '+62 604 204 5795',
      EMAIL: 'laloshechkin0@hhs.gov',
      ACTIONS: 'SELECT'
    },
    {
      SL: 2,
      NAME: 'Randi',
      CATEGORY: 'Clerks',
      MOBILE: '+86 325 752 9714',
      EMAIL: 'rgansbuhlerl@altervista.org',
      ACTIONS: 'SELECT'
    },
    {
      SL: 3,
      NAME: 'Sacha',
      CATEGORY: 'Client',
      MOBILE: '+51 744 817 9445',
      EMAIL: 'stebbe2@plala.or.jp',
      ACTIONS: 'SELECT'
    },
    {
      SL: 4,
      NAME: 'Tabitha',
      CATEGORY: 'Lawyer',
      MOBILE: '+33 221 852 8164',
      EMAIL: 'tvarty3@github.io',
      ACTIONS: 'SELECT'
    },
    {
      SL: 1,
      NAME: 'Liza',
      CATEGORY: 'Court reporter',
      MOBILE: '+62 604 204 5795',
      EMAIL: 'laloshechkin0@hhs.gov',
      ACTIONS: 'SELECT'
    },
    {
      SL: 2,
      NAME: 'Randi',
      CATEGORY: 'Clerks',
      MOBILE: '+86 325 752 9714',
      EMAIL: 'rgansbuhlerl@altervista.org',
      ACTIONS: 'SELECT'
    },
    {
      SL: 3,
      NAME: 'Sacha',
      CATEGORY: 'Client',
      MOBILE: '+51 744 817 9445',
      EMAIL: 'stebbe2@plala.or.jp',
      ACTIONS: 'SELECT'
    },
    
  ];
  return (
  <>
  <div style={{overflow:"hidden"}}>
  <div class="row" style={{overflow:"hidden"}}>
      <div class="col-sm-2 between-sm-3-and-4" ><h1 className='sidebar'>Sidebar</h1>
    
      </div>
      <div class="col-sm-9 contact">
        <div className='container'>
        
  
  <div className='contact-components'>
    <div className='contact-header'>
    <p className='contact-list-title'>Contact List</p>
    <button className='contact-header-btn'><GoPlus className='contact-icon' />NEW CONTACT</button>
    <div className='contact-header-textbox'>
    <input type="text" name="search" placeholder="JS.QUICK SEARCH" className='contact-header-textfeild'/>
    </div>
    <div className='contact-header-icons'>
      <div className='contact-header-icon'>
      
        <i  style={{marginLeft:'25px'}}><GoFile /></i>
        
      <i><AiOutlineFilePdf /></i>
      <i><AiOutlineFileJpg /></i>
      
      <i><AiOutlineFileText />
      </i>
      <i style={{borderRight:"none"}}><AiOutlinePrinter />
      </i>
      </div>
    </div>
    </div>
    <div className='contact-body'>
    <div className="card elevation">
       
    <table>
        <thead>
          <tr className='contact-header-tr'>
            <th style={{paddingLeft:"50px"}}>SL</th>
            <th><i class='fa fa-arrow-down fa-5x' id='icon-id'></i> NAME</th>
            <th><i class='fa fa-arrow-down fa-5x' id='icon-id'></i> CATEGORY</th>
            <th><i class='fa fa-arrow-down fa-5x'id='icon-id'></i> MOBILE</th>
            <th><i class='fa fa-arrow-down fa-5x' id='icon-id'></i> EMAIL</th>
            <th><i class='fa fa-arrow-down fa-5x' id='icon-id'></i> ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='contact-body-tr'>
              <td style={{paddingLeft:"50px"}}>{item.SL}</td>
              <td>{item.NAME}</td>
              <td>{item.CATEGORY}</td>
              <td>{item.MOBILE}</td>
              <td>{item.EMAIL}</td>
              <td><button className='select-btn'>{item.ACTIONS}  <i class='fa fa-arrow-down fa-5x' id='icon-id'></i></button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

   
<div>
  <div className='contact-footer'>
    <p>js.Showing page 1 js.of 4</p>
    <div className='contant-page-btn'>
      <button className='contact-footer-btn'><AiOutlineArrowLeft />      </button>
      <button className='contact-footer-btn active'>1</button>
      <button className='contact-footer-btn'>2</button>
      <button className='contact-footer-btn'>3</button>
      <button className='contact-footer-btn'>4</button>

      <button className='contact-footer-btn'><AiOutlineArrowRight />
      </button>
    </div>
  </div>
  <p className='contact-footer-bottom'>Copyright © 2020 - 2021 All rights reserved | This application is made by <span className='contact-footer-spam'>Codethemes</span></p>

</div>
  </div>

 </div>
 





          </div></div>
    </div>
    </div>
  </>
  );
}

export default App;
