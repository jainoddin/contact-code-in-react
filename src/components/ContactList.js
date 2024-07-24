import React, { useRef, useEffect, useCallback, useState } from "react";
import "./ContactList.css";
import { FaPlus } from "react-icons/fa6";
import {
  AiOutlineFilePdf,
  AiOutlinePrinter,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { GrDocumentCsv } from "react-icons/gr";
import { ImFileExcel } from "react-icons/im";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function ContactList() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigateFunc = useNavigate();
  const itemsPerPage = 10;
  const [list, setList] = useState(true);
  const [data, setData] = useState([
    {
      SL: 1,
      NAME: "Liza",
      CATEGORY: "Court reporter",
      MOBILE: "+62 604 204 5795",
      EMAIL: "laloshechkin0@hhs.gov",
      ACTIONS: "SELECT",
    },
    {
      SL: 2,
      NAME: "Randi",
      CATEGORY: "Clerks",
      MOBILE: "+86 325 752 9714",
      EMAIL: "rgansbuhlerl@altervista.org",
      ACTIONS: "SELECT",
    },
    {
      SL: 3,
      NAME: "Sacha",
      CATEGORY: "Client",
      MOBILE: "+51 744 817 9445",
      EMAIL: "stebbe2@plala.or.jp",
      ACTIONS: "SELECT",
    },
    {
      SL: 4,
      NAME: "Tabitha",
      CATEGORY: "Lawyer",
      MOBILE: "+33 221 852 8164",
      EMAIL: "tvarty3@github.io",
      ACTIONS: "SELECT",
    },
    {
      SL: 5,
      NAME: "Person5",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 6,
      NAME: "Person6",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 7,
      NAME: "Person7",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 8,
      NAME: "Person8",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 9,
      NAME: "Person9",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 10,
      NAME: "Person10",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 11,
      NAME: "Person11",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 12,
      NAME: "Person12",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 13,
      NAME: "Person13",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 14,
      NAME: "Person14",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 15,
      NAME: "Person15",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 16,
      NAME: "Person16",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 17,
      NAME: "Person17",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 18,
      NAME: "Person18",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 19,
      NAME: "Person19",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 20,
      NAME: "Person20",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 21,
      NAME: "Person21",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 22,
      NAME: "Person22",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 23,
      NAME: "Person23",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 24,
      NAME: "Person24",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 25,
      NAME: "Person25",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 26,
      NAME: "Person26",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 27,
      NAME: "Person27",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 28,
      NAME: "Person28",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 29,
      NAME: "Person29",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 30,
      NAME: "Person30",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 31,
      NAME: "Person31",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 32,
      NAME: "Person32",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 33,
      NAME: "Person33",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 34,
      NAME: "Person34",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 35,
      NAME: "Person35",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 36,
      NAME: "Person36",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 37,
      NAME: "Person37",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 38,
      NAME: "Person38",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 39,
      NAME: "Person39",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 40,
      NAME: "Person40",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 41,
      NAME: "Person41",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 42,
      NAME: "Person42",
      CATEGORY: "Category5",
      MOBILE: "+123 456 7890",
      EMAIL: "email5@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 43,
      NAME: "Person43",
      CATEGORY: "Category6",
      MOBILE: "+123 456 7890",
      EMAIL: "email6@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 44,
      NAME: "Person44",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
    {
      SL: 45,
      NAME: "Person45",
      CATEGORY: "Category7",
      MOBILE: "+123 456 7890",
      EMAIL: "email7@example.com",
      ACTIONS: "SELECT",
    },
  ]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getPageNumbers = () => {
    const maxPageButtons = 4;
    const halfRange = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(currentPage - halfRange, 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    return [...Array(endPage - startPage + 1).keys()].map((i) => i + startPage);
  };

  const handleSelectBtnClick = (e, item) => {
    if (selectedItem) {
      const prevDropdown = document.querySelector(
        `#select-dropdown-${selectedItem.SL}`
      );
      const prevButton = document.querySelector(
        `#select-btn-${selectedItem.SL}`
      );
      if (prevDropdown) {
        prevDropdown.style.display = "none";
      }
      if (prevButton) {
        prevButton.classList.remove("selected");
      }
    }

    if (selectedItem && selectedItem.SL === item.SL) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
      const dropdown = e.target.nextSibling;
      dropdown.style.display = "block";
      e.target.classList.add("selected");
    }
  };

  const handleEditClick = (item) => {
    console.log(`Edit item ${item.SL}`);
    navigateFunc("/edit");
  };

  const handleDeleteClick = (item) => {
    const newData = data.filter((dataItem) => dataItem.SL !== item.SL);
    setData(newData);
    setSelectedItem(() => null); // Use a callback function to update the state

    // Update the display style of the select-dropdown div
    const dropdownDiv = document.getElementById(`select-dropdown-${item.SL}`);
    if (dropdownDiv) {
      dropdownDiv.style.display = "none";
    }
  };

  const generateCSV = () => {
    const csvHeader = "NAME,CATEGORY,MOBILE,EMAIL\n";
    const csvRows = data
      .map(
        (item) => `${item.NAME},${item.CATEGORY},${item.MOBILE},${item.EMAIL}`
      )
      .join("\n");
    return csvHeader + csvRows;
  };

  const downloadCSV = () => {
    const csvData = generateCSV();
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "contacts.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Contact List", 15, 15);

    let startY = 30;
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const maxLineWidth = pageWidth - margin * 2;

    data.forEach((item, index) => {
      const { NAME, CATEGORY, MOBILE, EMAIL } = item;
      const text = `${
        index + 1
      }. NAME: ${NAME}, CATEGORY: ${CATEGORY}, MOBILE: ${MOBILE}, EMAIL: ${EMAIL}`;

      // Split text into multiple lines if it exceeds the max line width
      const splitText = doc.splitTextToSize(text, maxLineWidth);
      splitText.forEach((line) => {
        doc.text(line, 15, startY);
        startY += 10;
      });
    });

    doc.save("contacts.pdf");
  };

  const handleIconClick = (iconName) => {
    if (iconName === "GoFile") {
      const tableData = data
        .map(
          (item) =>
            `${item.NAME}, ${item.CATEGORY}, ${item.MOBILE}, ${item.EMAIL}`
        )
        .join("\n");
      navigator.clipboard
        .writeText(tableData)
        .then(() => {
          alert("Table data copied to clipboard");
          // Optionally, you can show a message or perform any other action after copying
        })
        .catch((err) => {
          console.error("Failed to copy table data: ", err);
          // Handle errors if clipboard write fails
        });
    } else if (iconName === "AiOutlineFilePdf") {
      generatePDF();
      alert("PDF file downloaded.");
      // Logic for handling PDF file download
    } else if (iconName === "AiOutlineFileJpg") {
      // Logic for handling JPG file download
      downloadCSV();
      alert("CSV file downloaded.");
    } else if (iconName === "AiOutlineFileText") {
      // Logic for handling plain text file download

      downloadCSV();
      alert("EXCEL file dowloaded");
    } else if (iconName === "AiOutlinePrinter") {
      window.print();
    }
  };

  const newpage = () => {
    navigateFunc("/new");
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
                <div className="contact-header">
                  <p className="contact-list-title">Contact List</p>
                  <button className="contact-header-btn" onClick={newpage}>
                    <FaPlus className="contact-icon" />
                    NEW CONTACT
                  </button>
                  <div className="contact-header-textbox">
                    <input
                      type="text"
                      name="search"
                      placeholder="JS.QUICK SEARCH"
                      className="contact-header-textfeild"
                    />
                  </div>
                  <div className="contact-header-icons">
                    <div className="contact-header-icon">
                      <i
                        style={{ marginLeft: "25px" }}
                        onClick={() => handleIconClick("GoFile")}
                      >
                        <FaRegCopy />
                        <span className="tooltips">Copy</span>{" "}
                      </i>
                      <i onClick={() => handleIconClick("AiOutlineFilePdf")}>
                        <AiOutlineFilePdf />{" "}
                        <span className="tooltips">PDF</span>
                      </i>
                      <i onClick={() => handleIconClick("AiOutlineFileJpg")}>
                        <GrDocumentCsv /> <span className="tooltips">CSV</span>{" "}
                      </i>
                      <i onClick={() => handleIconClick("AiOutlineFileText")}>
                        <ImFileExcel /> <span className="tooltips">Excel</span>{" "}
                      </i>
                      <i
                        style={{ borderRight: "none" }}
                        onClick={() => handleIconClick("AiOutlinePrinter")}
                      >
                        <AiOutlinePrinter />{" "}
                        <span className="tooltips">Print</span>
                      </i>
                    </div>
                  </div>
                </div>
                <div className="contact-body">
                  <div className="card elevation">
                    <table>
                      <thead>
                        <tr className="contact-header-tr">
                          <th style={{ paddingLeft: "50px" }}>SL</th>
                          <th>
                            <i
                              className="fa fa-arrow-down fa-5x"
                              id="icon-id"
                            ></i>{" "}
                            NAME
                          </th>
                          <th>
                            <i
                              className="fa fa-arrow-down fa-5x"
                              id="icon-id"
                            ></i>{" "}
                            CATEGORY
                          </th>
                          <th>
                            <i
                              className="fa fa-arrow-down fa-5x"
                              id="icon-id"
                            ></i>{" "}
                            MOBILE
                          </th>
                          <th>
                            <i
                              className="fa fa-arrow-down fa-5x"
                              id="icon-id"
                            ></i>{" "}
                            EMAIL
                          </th>
                          <th>
                            <i
                              className="fa fa-arrow-down fa-5x"
                              id="icon-id"
                            ></i>{" "}
                            ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data
                          .slice(
                            (currentPage - 1) * itemsPerPage,
                            currentPage * itemsPerPage
                          )
                          .map((item, index) => (
                            <tr key={index} className="contact-body-tr">
                              <td style={{ paddingLeft: "50px" }}>
                                {(currentPage - 1) * itemsPerPage + index + 1}
                              </td>
                              <td>{item.NAME}</td>
                              <td>{item.CATEGORY}</td>
                              <td>{item.MOBILE}</td>
                              <td>{item.EMAIL}</td>
                              <td>
                                <button
                                  id={`select-btn-${item.SL}`}
                                  className={`select-btn ${
                                    selectedItem && selectedItem.SL === item.SL
                                      ? "selected"
                                      : ""
                                  }`}
                                  onClick={(e) => handleSelectBtnClick(e, item)}
                                >
                                  {item.ACTIONS}{" "}
                                  <i
                                    className="fa fa-arrow-down fa-5x"
                                    id="icon-id"
                                  ></i>
                                </button>
                                <div
                                  className="select-dropdown"
                                  id={`select-dropdown-${item.SL}`}
                                  style={{ display: "none" }}
                                >
                                  <ul>
                                    <li
                                      onClick={() => handleEditClick(item)}
                                      className="contact-list-edit"
                                    >
                                      EDIT
                                    </li>
                                    <li onClick={() => handleDeleteClick(item)}>
                                      DELETE
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Print-Only Table */}
                  <div className="print-only">
                    <table>
                      <thead>
                        <tr className="contact-header-tr">
                          <th style={{ paddingLeft: "50px" }}>NAME</th>
                          <th>CATEGORY</th>
                          <th>MOBILE</th>
                          <th>EMAIL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index} className="contact-body-tr">
                            <td style={{ paddingLeft: "50px" }}>{item.NAME}</td>
                            <td>{item.CATEGORY}</td>
                            <td>{item.MOBILE}</td>
                            <td>{item.EMAIL}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="contact-footer">
                    <p>
                      Showing page {currentPage} of {totalPages}
                    </p>
                    <div className="contact-page-btn">
                      <button
                        className="contact-footer-btn"
                        onClick={handlePrevPage}
                      >
                        <AiOutlineArrowLeft />
                      </button>
                      {getPageNumbers().map((number) => (
                        <button
                          key={number}
                          className={`contact-footer-btn ${
                            currentPage === number ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(number)}
                        >
                          {number}
                        </button>
                      ))}
                      <button
                        className="contact-footer-btn"
                        onClick={handleNextPage}
                      >
                        <AiOutlineArrowRight />
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
    </>
  );
}

export default ContactList;
