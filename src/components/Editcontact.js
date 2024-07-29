import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
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
import { FaTextHeight } from "react-icons/fa6";
import {
  CiTextAlignLeft,
  CiTextAlignCenter,
  CiTextAlignRight,
} from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { ContactContext } from "./ContactContext";

function Editcontact() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { setContacts } = useContext(ContactContext);

  const navigateFunc = useNavigate();
  const popupRef = useRef(null);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  //*********************************************commentboxcode************************************************
  const textareaRef = useRef(null);
  const handleRef = useRef(null);
  const isResizing = useRef(false);
  const [isTyping, setIsTyping] = useState(false);

  const location = useLocation(); // This hook is from react-router-dom
  const { contact } = location.state || {}; // Retrieve contact data from state
  const [name, setName] = useState(contact?.NAME || "");
  const [email, setEmail] = useState(contact?.EMAIL || "");
  const [mobile, setMobile] = useState(contact?.MOBILE || "");
  const [sl, setsl] = useState(contact.SL);

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
    contact?.CATEGORY || "Select Contact Category"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
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

  const [selectedFontSize, setSelectedFontSize] = useState("12px");
  const [savedRange, setSavedRange] = useState(null);
  const fontSizes = ["12px", "14px", "16px", "18px", "20px"];
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
    const button = document.querySelector(".commentbox-header-c");

    // Create a temporary span element to measure the width of the text
    const tempSpan = document.createElement("span");
    tempSpan.textContent = fontFamily;
    tempSpan.style.fontFamily = fontFamily;
    document.body.appendChild(tempSpan);

    // Get the width of the text
    const textWidth = tempSpan.offsetWidth;

    // Remove the temporary span element
    document.body.removeChild(tempSpan);

    // Set the width of the button
    button.style.width = `${textWidth + 20}px`;
  };

  const [highlightColor, setHighlightColor] = useState("white"); // Default highlight color

  const handleColorChange = (event) => {
    setHighlightColor(event.target.value);
  };

  const applyHighlightColor = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      // Ensure the range starts and ends within a text node
      if (
        range.startContainer.nodeType === Node.TEXT_NODE &&
        range.endContainer.nodeType === Node.TEXT_NODE
      ) {
        const span = document.createElement("span");
        span.style.backgroundColor = highlightColor;

        // Surround the contents of the range with the span
        range.surroundContents(span);
      } else {
        alert("Please make sure your selection is within the same text node.");
      }
    }
  };

  const handleOrderListClick = () => {
    restoreSelection();
    document.execCommand("insertOrderedList", false, null);
  };

  const handleUnorderListClick = () => {
    restoreSelection();
    document.execCommand("insertUnorderedList", false, null);
  };
  const [paddingTop, setPaddingTop] = useState(5); // initial padding-top

  const handlePaddingAdjustClick = () => {
    const newPaddingTop = prompt(
      "Enter new padding-top (in pixels):",
      paddingTop
    );
    if (newPaddingTop !== null && !isNaN(newPaddingTop) && newPaddingTop >= 0) {
      setPaddingTop(parseInt(newPaddingTop, 10));
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const handleInsertTableClick = () => {
    setShowModal(true);
  };

  const insertTable = (rows, cols) => {
    restoreSelection();
    let tableHTML =
      '<table border="1" style="width: 100%; border-collapse: collapse;">';
    tableHTML += "<tr>";
    for (let i = 0; i < cols; i++) {
      tableHTML += `<th>Header ${i + 1}</th>`;
    }
    tableHTML += "</tr>";
    for (let i = 0; i < rows; i++) {
      tableHTML += "<tr>";
      for (let j = 0; j < cols; j++) {
        tableHTML += `<td>Data ${i + 1}-${j + 1}</td>`;
      }
      tableHTML += "</tr>";
    }
    tableHTML += "</table>";
    document.execCommand("insertHTML", false, tableHTML);
    setShowModal(false);
  };
  const [showtextDropdown, setShowtextDropdown] = useState(false);

  const handledropdownText = () => {
    setShowtextDropdown(!showtextDropdown);
  };

  const handleAlignLeft = () => {
    document.execCommand("justifyLeft", false, null);
    setShowtextDropdown(false);
  };

  const handleAlignCenter = () => {
    document.execCommand("justifyCenter", false, null);
    setShowtextDropdown(false);
  };

  const handleAlignRight = () => {
    document.execCommand("justifyRight", false, null);
    setShowtextDropdown(false);
  };

  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkURL, setLinkURL] = useState("");

  const handleLinkButtonClick = () => {
    saveSelection();
    setShowLinkModal(true);
  };

  const handleInsertLink = () => {
    restoreSelection();
    if (savedRange && linkURL) {
      const anchor = document.createElement("a");
      anchor.href = linkURL;
      anchor.target = "_blank";
      anchor.textContent = linkURL;

      savedRange.deleteContents();
      savedRange.insertNode(anchor);

      setShowLinkModal(false);
      setLinkURL("");
    }
  };
  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.tagName === "A") {
        window.open(event.target.href, "_blank");
        event.preventDefault();
      }
    };

    const textarea = textareaRef.current;
    textarea.addEventListener("click", handleLinkClick);

    return () => {
      textarea.removeEventListener("click", handleLinkClick);
    };
  }, []);

  const inputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSubmit = () => {
    const input = inputRef.current;
    const emailInput = emailInputRef.current;

    const mobileInput = mobileInputRef.current;
    if (!input.checkValidity()) {
      input.reportValidity();
    } else if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
    } else if (!mobileInput.checkValidity()) {
      mobileInput.reportValidity();
    } else {
      const formData = { name, email, mobile, selectedCategory, sl };
      // Print the array to the console
      console.log(formData);
      setContacts(formData);
      navigateFunc("/");
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
                                    value={searchTerm}
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
                              value={name}
                              type="text"
                              className="contact-name-textboxx"
                              placeholder="NAME"
                              pattern="[A-Za-z\s]*"
                              onInvalid={(e) =>
                                e.target.setCustomValidity(
                                  "Please enter a valid name using only letters and spaces"
                                )
                              }
                              onInput={(e) => {
                                e.target.setCustomValidity("");
                                setName(e.target.value);
                              }}
                              ref={inputRef}
                              required
                            />
                          </div>
                          <label className="contact-name-lable">
                            E-MAIL<span className="contact-span2"> *</span>
                          </label>
                          <label className="contact-name-lable contact-mobile">
                            MOBILE<span className="contact-span2"> *</span>
                          </label>
                          <div className="contact-name-textbox">
                            <input
                              type="email"
                              value={email}
                              className="contact-name-email"
                              placeholder="E-MAIL"
                              onInvalid={(e) =>
                                e.target.setCustomValidity(
                                  "Please enter a valid email address"
                                )
                              }
                              onInput={(e) => {
                                e.target.setCustomValidity("");
                                setEmail(e.target.value);
                              }}
                              ref={emailInputRef}
                              required
                            />
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <input
                              type="text" // Use text type to apply pattern validation
                              value={mobile}
                              className="contact-name-email"
                              placeholder="MOBILE"
                              pattern="\d{10}" // Pattern to ensure exactly 10 digits
                              onInvalid={(e) =>
                                e.target.setCustomValidity(
                                  "Please enter a valid mobile number with exactly 10 digits"
                                )
                              }
                              onInput={(e) => {
                                e.target.setCustomValidity("");
                                setMobile(e.target.value);
                              }}
                              ref={mobileInputRef}
                              required
                            />
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

                                <div
                                  className="dropdown"
                                  style={{ position: "inherit" }}
                                >
                                  <button
                                    className="commentbox-header-c"
                                    style={{ paddingLeft: "8px" }}
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

                                <div
                                  className="dropdown"
                                  style={{ position: "inherit" }}
                                >
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
                                  onClick={() =>
                                    document
                                      .getElementById("colorInput")
                                      .click()
                                  }
                                >
                                  <FaCaretDown className="comment-icon" />
                                  <input
                                    id="colorInput"
                                    type="color"
                                    onChange={handleColorChange}
                                    style={{
                                      visibility: "hidden",
                                      position: "absolute",
                                      left: "20%",
                                      top: "23%",
                                      width: 0,
                                      height: 0,
                                    }}
                                  />
                                </button>

                                <button
                                  className="commentbox-header-orderlist"
                                  onClick={handleOrderListClick}
                                >
                                  <MdFormatListNumbered />
                                </button>

                                <button
                                  className="commentbox-header-unorderlist"
                                  onClick={handleUnorderListClick}
                                >
                                  <MdFormatListBulleted />
                                </button>

                                <button
                                  onClick={handledropdownText}
                                  className="commentbox-header-list"
                                >
                                  <MdFormatAlignLeft />
                                  <FaCaretDown className="comment-icon" />
                                </button>

                                {showtextDropdown && (
                                  <div className="dropdown-menu12">
                                    <button
                                      onClick={handleAlignLeft}
                                      className="commentbox-header-list"
                                    >
                                      <CiTextAlignLeft />
                                    </button>
                                    <button
                                      onClick={handleAlignCenter}
                                      className="commentbox-header-list"
                                    >
                                      <CiTextAlignCenter />
                                    </button>
                                    <button
                                      onClick={handleAlignRight}
                                      className="commentbox-header-list"
                                    >
                                      <CiTextAlignRight />
                                    </button>
                                  </div>
                                )}

                                <button
                                  className="commentbox-header-listt"
                                  onClick={handlePaddingAdjustClick}
                                >
                                  <FaTextHeight />

                                  <FaCaretDown className="comment-icon" />
                                </button>

                                <button
                                  className="commentbox-header-table"
                                  onClick={handleInsertTableClick}
                                >
                                  <ImTable2 />
                                </button>

                                {showModal && (
                                  <div className="modal">
                                    <div className="modal-content">
                                      <h2 style={{ color: "#828bb2" }}>
                                        Insert Table
                                      </h2>
                                      <label className="contact-row-lable">
                                        Rows:
                                        <input
                                          type="number"
                                          className="contact-row1-textboxx"
                                          value={rows}
                                          onChange={(e) =>
                                            setRows(Number(e.target.value))
                                          }
                                          min="1"
                                        />
                                      </label>
                                      <br />
                                      <label className="contact-row-lable">
                                        Columns:
                                        <input
                                          type="number"
                                          className="contact-row-textboxx"
                                          value={cols}
                                          onChange={(e) =>
                                            setCols(Number(e.target.value))
                                          }
                                          min="1"
                                        />
                                      </label>
                                      <br />
                                      <button
                                        onClick={() => insertTable(rows, cols)}
                                        className="popup-table-btn"
                                      >
                                        Insert
                                      </button>
                                      <button
                                        onClick={() => setShowModal(false)}
                                        className="popup-table-btn2"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                )}

                                <button
                                  className="commentbox-header-link"
                                  onClick={handleLinkButtonClick}
                                >
                                  <MdOutlineLink />
                                </button>
                                {showLinkModal && (
                                  <div className="modal2">
                                    <div className="modal-content2">
                                      <h2 style={{ color: "#828bb2" }}>
                                        Insert Link
                                      </h2>
                                      <input
                                        type="text"
                                        value={linkURL}
                                        onChange={(e) =>
                                          setLinkURL(e.target.value)
                                        }
                                        placeholder="Enter URL"
                                        className="contact-link-textbox"
                                      />
                                      <div className="button-container">
                                        <button
                                          onClick={handleInsertLink}
                                          className="popup-link-btn"
                                        >
                                          Insert Link
                                        </button>
                                        <button
                                          onClick={() =>
                                            setShowLinkModal(false)
                                          }
                                          className="popup-link-btn2"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>

                              <div
                                id="myTextarea"
                                ref={textareaRef}
                                onMouseUp={saveSelection}
                                rows="4"
                                cols="80"
                                contentEditable={true}
                                placeholder="Your text here..."
                                className="contact-dropdownlist-text focus-input"
                                onInput={saveSelection}
                                style={{ paddingTop: `${paddingTop}px` }}
                              ></div>

                              <div
                                className="custom-resize-handle"
                                ref={handleRef}
                              >
                                <FaGripLines
                                  className="comment-icon"
                                  style={{ marginTop: "7px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="comment-submit-btn"
                        style={{ marginTop: "20px" }}
                        onClick={handleSubmit}
                      >
                        <AiOutlineCheck /> C R E A T E
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
