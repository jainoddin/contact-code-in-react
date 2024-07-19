import './App.css';
import { GoPlus } from "react-icons/go";

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
    {
      SL: 4,
      NAME: 'Tabitha',
      CATEGORY: 'Lawyer',
      MOBILE: '+33 221 852 8164',
      EMAIL: 'tvarty3@github.io',
      ACTIONS: 'SELECT'
    }
  ];
  return (
  <>
 <div className='contact'>
  <div className='contact-components'>
    <div className='contact-header'>
    <p className='contact-list-title'>Contact List</p>
    <button className='contact-header-btn'><GoPlus className='contact-icon' />NEW CONTACT</button>
    <div className='contact-header-textbox'>
    <input type="text" name="search" placeholder="JS.QUICK SEARCH" className='contact-header-textfeild'/>
    </div>
    <div className='contact-header-icons'>
      <div className='contact-header-icon'>
      <i class='fa fa-file-text-o fa-5x'className='none-dispaly'></i>  
        <i class='fa fa-file fa-5x' style={{marginLeft:'25px'}}></i>
        
      <i class='fa fa-download fa-5x' ></i>
      <i class='fa fa-print fa-5x' ></i>
      
      <i class='fa fa-paste fa-5x'></i>
      <i class='fa fa-columns fa-5x' style={{borderRight:"none"}}></i>
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

    </div>
<div>
  <div className='contact-footer'>
    <p>js.Showing page 1 js.of 4</p>
  </div>
</div>
  </div>

 </div>
 
  </>
  );
}

export default App;
