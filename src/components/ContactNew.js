import React, { useState } from "react";
import "./ContactNew.css";
import { FaPlusCircle, FaCaretDown, FaCaretUp } from "react-icons/fa";

function ContactNew() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    console.log(`User input: ${userInput}`);
  }

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className="row" style={{ overflow: "hidden" }}>
          <div className="col-sm-2 between-sm-3-and-4">
            <h1 className="sidebar">Sidebar</h1>
          </div>
          <div className="col-sm-9 contact">
            <div className="container">
              <div className="contact-components">
                <div className="contact-header-2">
                  <p className="contact-list-title">Add Contact</p>
                </div>
                <div className="contact-body">
                  <div className="card elevation">
                    <div className="card-body">
                      <div className="form-group">
                        <label className="col-sm-2 control-label">CATEGORY</label>
                        <label className="contact-lable2">
                          CREATE NEW <FaPlusCircle className="contact-lable2-icon" />
                        </label>
                        <br />
                        <div className="contact-dropdownlist">
                          <button
                            className="contact-dropdownlist-btn"
                            onClick={handleDropdownClick}
                          >
                           <span className="span-btn"> Select Contact Category</span> {showDropdown ? ( <FaCaretUp className="contact-down-icon" /> ):(<FaCaretDown className="contact-down-icon" />)}
                          </button>
                          {showDropdown && (
                            <div className="contact-dropdownlist-iteams">
                              <div className="contact-body-2">
                                <div className="card-2 elevation">
                                  <input 
                                    type="text" 
                                    className="contact-dropdownlist-text focus-input" 
                                    placeholder="SEARCH..." 
                                    onChange={handleInputChange} 
                                  />
                                  <div className="contact-dropdownlist-menu">
                                    <table>
                                      <tr className="a">
                                        <td className="padded active">Select Contact Category </td>
                                      </tr>
                                      <tr className="a">
                                        <td className="padded">JUDGE</td>
                                      </tr>
                                      <tr className="a">
                                        <td className="padded">LAWYER </td>
                                      </tr>
                                      <tr className="a">
                                        <td className="padded">CLIENT</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">COURT REPORTER</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">CLERKS</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">TEST</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">aaaa</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">bbb</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">ccc</td>
                                      </tr>
                                      <tr>
                                        <td className="padded">ddd</td>
                                      </tr>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="contact-name">
                            <label className="contact-name-lable">NAME<span className="contact-span2"> *</span></label>
                          <div className="contact-name-textbox">
                            <input type="text" className="contact-name-textboxx" placeholder="NAME"></input>                       
                          </div>
                          <label className="contact-name-lable">EMAIL</label>
                          <label className="contact-name-lable contact-mobile">MOBILE<span className="contact-span2"> *</span></label>


                          <div className="contact-name-textbox">
                          <input type="email" className="contact-name-email" placeholder="EMAIL"></input><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          <input type="number" className="contact-name-email" placeholder="MOBILE"></input>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  <p className="contact-footer-bottom">
                    Copyright © 2020 - 2021 All rights reserved | This
                    application is made by{" "}
                    <span className="contact-footer-spam">Codethemes</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactNew;
