import React, { useRef, useEffect, useCallback, useState } from "react";
import "./ContactNew.css";
import {
  FaPlusCircle,
  FaCaretDown,
  FaCaretUp,
  FaGripLines,
  FaItalic,
  FaBold,
  FaUnderline,
} from "react-icons/fa";
import { PiTextAaBold, PiTextTBold } from "react-icons/pi";
import {
  MdFormatListNumbered,
  MdFormatListBulleted,
  MdFormatAlignLeft,
  MdOutlineLink,
} from "react-icons/md";
import { ImTable2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function Editcontact() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigateFunc = useNavigate();
  const popupRef = useRef(null);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    console.log(`User input: ${userInput}`);
  };

  //*********************************************commentboxcode************************************************
  const textareaRef = useRef(null);
  const handleRef = useRef(null);
  const isResizing = useRef(false);
  const [isTyping, setIsTyping] = useState(false);

  const startResize = useCallback((e) => {
    isResizing.current = true;
    document.addEventListener("mousemove", resizeTextarea);
    document.addEventListener("mouseup", stopResize);
  }, []);

  const resizeTextarea = useCallback((e) => {
    if (isResizing.current) {
      const rect = textareaRef.current.getBoundingClientRect();
      textareaRef.current.style.height = `${e.clientY - rect.top}px`;
    }
  }, []);

  const stopResize = useCallback(() => {
    isResizing.current = false;
    document.removeEventListener("mousemove", resizeTextarea);
    document.removeEventListener("mouseup", stopResize);
  }, [resizeTextarea]);

  useEffect(() => {
    const handle = handleRef.current;
    handle.addEventListener("mousedown", startResize);
    return () => {
      handle.removeEventListener("mousedown", startResize);
    };
  }, [startResize]);

  const popup = () => {
    if (popupRef.current) {
      popupRef.current.classList.add("open");
    }
  };
  const popupclose = () => {
    if (popupRef.current) {
      popupRef.current.classList.remove("open");
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(
    "Select Contact Category"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const categories = [
    "JUDGE",
    "LAWYER",
    "CLIENT",
    "COURT REPORTER",
    "CLERKS",
    "TEST",
    "aaaa",
    "bbb",
    "ccc",
    "ddd",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const contentEditableRef = useRef(null);
  const [isBoldActive, setIsBoldActive] = useState(false);
  const [isBoldActive2, setIsBoldActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isFontFamilyDropdownOpen, setIsFontFamilyDropdownOpen] =
    useState(false);
  const [selectedFontFamily, setSelectedFontFamily] = useState("Arial");
  const [isFontSizeDropdownOpen, setIsFontSizeDropdownOpen] = useState(false);

  const fontFamilies = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Courier New",
    "Georgia",
  ];

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
    setIsBoldActive(!isBoldActive);
  };

  const handleitalicClick = () => {
    document.execCommand("italic", false, null);
    setIsBoldActive2(!isBoldActive2);
  };

  const handleInput = () => {
    setIsTyping(true);
  };

  const handleUnderlineClick = () => {
    document.execCommand("underline", false, null);
    setIsActive3(!isActive3);
  };

  const [selectedFontSize, setSelectedFontSize] = useState("16px");
  const [savedRange, setSavedRange] = useState(null);
  const fontSizes = ["12px", "14px", "16px", "18px", "20px", "24px", "28px"];
  const [value, setValue] = useState("7");
  const saveSelection = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      setSavedRange(selection.getRangeAt(0));
    }
  };

  const restoreSelection = () => {
    const selection = window.getSelection();
    if (savedRange) {
      selection.removeAllRanges();
      selection.addRange(savedRange);
    }
  };

  useEffect(() => {
    if (selectedFontSize === "12px") {
      setValue("3");
    } else if (selectedFontSize === "14px") {
      setValue("4");
    } else if (selectedFontSize === "16px") {
      setValue("5");
    } else if (selectedFontSize === "18px") {
      setValue("6");
    } else if (selectedFontSize === "20px") {
      setValue("7");
    } else if (selectedFontSize === "24px") {
      setValue("8");
    } else if (selectedFontSize === "28px") {
      setValue("9");
    }
  }, [selectedFontSize]);

  const handleFontSizeChange = (size) => {
    console.log("Changing font size to:", size);
    restoreSelection();
    const selection = window.getSelection();
    console.log("Selection range count:", selection.rangeCount); // Debug log
    if (selection.rangeCount > 0) {
      document.execCommand("fontSize", false, value);
      console.log("Value used for execCommand:", value); // Debug log
      if (contentEditableRef.current) {
        const fontElements =
          contentEditableRef.current.getElementsByTagName("font");
        console.log("Font elements found:", fontElements.length); // Debug log
        for (let i = 0; i < fontElements.length; i++) {
          console.log("Font element size:", fontElements[i].size); // Debug log
          if (fontElements[i].size === "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = size;
          }
        }
      }
      setSelectedFontSize(size);
      console.log("Font size changed to:", size); // Debug log
    } else {
      // Alternative approach: manually apply font size
      const range = savedRange.cloneRange();
      const span = document.createElement("span");
      span.style.fontSize = size;
      range.surroundContents(span);
      setSelectedFontSize(size);
      console.log("Manually applied font size:", size); // Debug log
    }
    setIsFontSizeDropdownOpen(false);
  };

  const handleFontFamilyChange = (fontFamily) => {
    restoreSelection();
    document.execCommand("fontName", false, fontFamily);
    setSelectedFontFamily(fontFamily);
    setIsFontFamilyDropdownOpen(false);
  };




  const [highlightColor, setHighlightColor] = useState('white'); // Default highlight color

const handleColorChange = (event) => {
  setHighlightColor(event.target.value);
};

const applyHighlightColor = () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.backgroundColor = highlightColor;
    range.surroundContents(span);
  }
};

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
                        <label className="col-sm-2 control-label">
                          CATEGORY
                        </label>
                        <label className="contact-lable2" onClick={popup}>
                          CREATE NEW{" "}
                          <FaPlusCircle className="contact-lable2-icon" />
                        </label>
                        <br />
                        <div className="contact-dropdownlist">
                          <button
                            className="contact-dropdownlist-btn"
                            onClick={handleDropdownClick}
                          >
                            <span className="span-btn">{selectedCategory}</span>
                            {showDropdown ? (
                              <FaCaretUp className="contact-down-icon" />
                            ) : (
                              <FaCaretDown className="contact-down-icon" />
                            )}
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
                                      {filteredCategories.map((category) => (
                                        <tr
                                          key={category}
                                          className="a"
                                          onClick={() =>
                                            handleCategorySelect(category)
                                          }
                                        >
                                          <td className="padded">{category}</td>
                                        </tr>
                                      ))}
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="contact-name">
                          <label className="contact-name-lable">
                            NAME<span className="contact-span2"> *</span>
                          </label>
                          <div className="contact-name-textbox">
                            <input
                              type="text"
                              className="contact-name-textboxx"
                              placeholder="NAME"
                            ></input>
                          </div>
                          <label className="contact-name-lable">E-MAIL</label>
                          <label className="contact-name-lable contact-mobile">
                            MOBILE<span className="contact-span2"> *</span>
                          </label>
                          <div className="contact-name-textbox">
                            <input
                              type="email"
                              className="contact-name-email"
                              placeholder="E-MAIL"
                            ></input>
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <input
                              type="number"
                              className="contact-name-email"
                              placeholder="MOBILE"
                            ></input>
                          </div>
                          <div className="contact-commentbox">
                            <label className="contact-name-lable">
                              THE DESCRIPTION
                            </label>
                            <div className="comment-box">
                              <div className="commentbox-header">
                                <button
                                  className={`commentbox-header-b ${
                                    isBoldActive ? "active" : ""
                                  }`}
                                  onMouseDown={saveSelection}
                                  onClick={handleBoldClick}
                                >
                                  <FaBold />
                                </button>
                                <button
                                  className={`commentbox-header-i ${
                                    isBoldActive2 ? "active" : ""
                                  }`}
                                  onMouseDown={saveSelection}
                                  onClick={handleitalicClick}
                                >
                                  <FaItalic />
                                </button>
                                <button
                                  className={`commentbox-header-u ${
                                    isActive3 ? "active" : ""
                                  }`}
                                  onClick={handleUnderlineClick}
                                >
                                  <FaUnderline />
                                </button>

                                <div className="dropdown">
                                  <button
                                    className="commentbox-header-c"
                                    onMouseDown={saveSelection}
                                    onClick={() =>
                                      setIsFontFamilyDropdownOpen(
                                        !isFontFamilyDropdownOpen
                                      )
                                    }
                                  >
                                    {selectedFontFamily}{" "}
                                    <FaCaretDown className="comment-icon" />
                                  </button>
                                  {isFontFamilyDropdownOpen && (
                                    <div
                                      className="dropdown-menuu"
                                      style={{ padding: "15px" }}
                                    >
                                      {fontFamilies.map((fontFamily) => (
                                        <div
                                          key={fontFamily}
                                          className="font-dropdown-item"
                                          onClick={() =>
                                            handleFontFamilyChange(fontFamily)
                                          }
                                        >
                                          {fontFamily}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                <div className="dropdown">
                                  <button
                                    className="commentbox-header-fontsize"
                                    onClick={() =>
                                      setIsFontSizeDropdownOpen(
                                        !isFontSizeDropdownOpen
                                      )
                                    }
                                  >
                                    {selectedFontSize}{" "}
                                    <FaCaretDown className="comment-icon" />
                                  </button>
                                  {isFontSizeDropdownOpen && (
                                    <ul className="dropdown-menuuu">
                                      {fontSizes.map((size) => (
                                        <li
                                          key={size}
                                          onMouseDown={saveSelection}
                                          onClick={() =>
                                            handleFontSizeChange(size)
                                          }
                                        >
                                          {size}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>







                                <button
  className="commentbox-header-aa"
  onClick={() => applyHighlightColor()}
  style={{ backgroundColor: highlightColor }}
>
  <PiTextAaBold />
</button>
<button
  className="commentbox-header-color"
  onClick={() => document.getElementById('colorInput').click()}
>
  <FaCaretDown className="comment-icon" />
  <input
    id="colorInput"
    type="color"
    onChange={handleColorChange}
    style={{
      position: 'absolute',
      left:"30%",
      opacity: 0,
      cursor: 'pointer',
    }}
  />
</button>





                                <button className="commentbox-header-orderlist">
                                  <MdFormatListNumbered />
                                </button>
                                <button className="commentbox-header-unorderlist">
                                  <MdFormatListBulleted />
                                </button>
                                <button className="commentbox-header-list">
                                  <MdFormatAlignLeft />
                                  <FaCaretDown className="comment-icon" />
                                </button>
                                <button className="commentbox-header-listt">
                                  <PiTextTBold />
                                  <FaCaretDown className="comment-icon" />
                                </button>
                                <button className="commentbox-header-table">
                                  <ImTable2 />
                                  <FaCaretDown className="comment-icon" />
                                </button>
                                <button className="commentbox-header-link">
                                  <MdOutlineLink />
                                </button>
                              </div>

                              <div
                                id="myTextarea"
                                ref={textareaRef}
                                rows="4"
                                cols="80"
                                contentEditable={true}
                                placeholder="Your text here..."
                                className="contact-dropdownlist-text focus-input"
                                onInput={saveSelection}
                              ></div>

                              <div
                                className="custom-resize-handle"
                                ref={handleRef}
                              >
                                <FaGripLines className="comment-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="comment-submit-btn">
                        C R E A T E
                      </button>
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

      <div className="recovery-popup" ref={popupRef}>
        <div className="popup">
          <div className="popup-header">
            <p className="popup-ptag">New Contact Category</p>
            <button className="popup-btn" onClick={popupclose}>
              <AiOutlineClose className="popup-icon" />{" "}
            </button>
          </div>
          <div className="popup-body">
            <label className="popup-label">
              NAME<span className="contact-span2"> *</span>
            </label>
            <div className="input-containerr">
              <input
                type="text"
                className="contact-popup-textbox"
                placeholder="DESIGNATION NAME"
              ></input>
            </div>
            <label className="popup-label2">DESCRIPTION</label>
            <div className="input-containerr">
              <textarea
                className="contact-popup-textbox2"
                placeholder="DESIGNATION DESCRIPTION"
              ></textarea>
            </div>
            <button className="comment-popup-btn">
              <AiOutlineCheck /> C R E A T E
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editcontact;
