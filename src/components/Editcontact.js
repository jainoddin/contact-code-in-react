import React, {useRef, useEffect, useCallback,useState} from "react";
import "./ContactNew.css";
import { FaPlusCircle, FaCaretDown, FaCaretUp } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { FaItalic } from "react-icons/fa6";
import { FaBold } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa6";
import { PiTextAaBold } from "react-icons/pi";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatAlignLeft } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";
import { ImTable2 } from "react-icons/im";
import { MdOutlineLink } from "react-icons/md";




function Editcontact() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    console.log(`User input: ${userInput}`);
  }

  //*********************************************commentboxcode************************************************
  const textareaRef = useRef(null);
  const handleRef = useRef(null);
  const isResizing = useRef(false);

  const startResize = useCallback((e) => {
    isResizing.current = true;
    document.addEventListener('mousemove', resizeTextarea);
    document.addEventListener('mouseup', stopResize);
  }, []);

  const resizeTextarea = useCallback((e) => {
    if (isResizing.current) {
      const rect = textareaRef.current.getBoundingClientRect();
      textareaRef.current.style.height = `${e.clientY - rect.top}px`;
    }
  }, []);

  const stopResize = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener('mousemove', resizeTextarea);
    document.removeEventListener('mouseup', stopResize);
  }, [resizeTextarea]);

  useEffect(() => {
    const handle = handleRef.current;
    handle.addEventListener('mousedown', startResize);
    return () => {
      handle.removeEventListener('mousedown', startResize);
    };
  }, [startResize]);

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
                  <p className="contact-list-title">Edit Contact</p>
                </div>
                <div className="contact-body">
                  <div className="cardd elevation">
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
                          <label className="contact-name-lable">E-MAIL</label>
                          <label className="contact-name-lable contact-mobile">MOBILE<span className="contact-span2"> *</span></label>


                          <div className="contact-name-textbox">
                          <input type="email" className="contact-name-email" placeholder="E-MAIL"></input><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          <input type="number" className="contact-name-email" placeholder="MOBILE"></input>

                          </div>
                          <div className="contact-commentbox">
                          <label className="contact-name-lable">THE DESCRIPTION</label>
                          <div className="comment-box">


        <div className="commentbox-header">
          <button className="commentbox-header-b"><FaBold />
          </button>
          <button className="commentbox-header-i"><FaItalic />
          </button>
          <button className="commentbox-header-u"><FaUnderline />
          </button>
          <button className="commentbox-header-c">Cairo<FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-fontsize">18<FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-aa"><PiTextAaBold />
          </button>
          <button className="commentbox-header-color"><FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-orderlist"><MdFormatListNumbered />
          </button>
          <button className="commentbox-header-unorderlist"><MdFormatListBulleted />
          </button>
          <button className="commentbox-header-list"><MdFormatAlignLeft /><FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-listt"><PiTextTBold /><FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-table"><ImTable2 /><FaCaretDown className="comment-icon"/>
          </button>
          <button className="commentbox-header-link"><MdOutlineLink />
          </button>






        </div>





        <textarea id="myTextarea" ref={textareaRef} rows="4" cols="80" placeholder="Your text here..." className="contact-dropdownlist-text focus-input"></textarea> 
              <div className="custom-resize-handle" ref={handleRef}><FaGripLines className="comment-icon"/>
              </div>
    </div>
                         

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

export default Editcontact;
