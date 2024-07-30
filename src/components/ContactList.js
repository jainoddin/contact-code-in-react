import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  useContext,
} from "react";
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
import "jspdf-autotable";

import { useNavigate } from "react-router-dom";
import { ContactContext } from "./ContactContext";

function ContactList() {
  const { contacts } = useContext(ContactContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigateFunc = useNavigate();
  const itemsPerPage = 10;
  const [list, setList] = useState(true);
  const [printOnlyContent, setPrintOnlyContent] = useState([]);

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

  const hasRunRef = useRef(false);

  useEffect(() => {
    if (contacts && Object.keys(contacts).length > 0 && !hasRunRef.current) {
      const newdata = {
        SL: filteredData.length + 1,
        NAME: contacts.name,
        CATEGORY: contacts.selectedCategory,
        MOBILE: contacts.mobile,
        EMAIL: contacts.email,
        ACTIONS: "SELECT",
      };
      setFilteredData((prevData) => [...prevData, newdata]);
      hasRunRef.current = true;
    }
  }, [contacts, data.length]);
  // Update filtered data based on contacts
  const updateFilteredData = () => {
    setFilteredData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.SL === contacts.sl) {
          return {
            SL: contacts.sl,
            NAME: contacts.name,
            CATEGORY: contacts.selectedCategory,
            MOBILE: contacts.mobile,
            EMAIL: contacts.email,
            ACTIONS: "SELECT",
          };
        }
        return item;
      });
      return updatedData;
    });
  };

  // Call updateFilteredData whenever contacts change
  React.useEffect(() => {
    if (contacts) {
      updateFilteredData();
    }
  }, [contacts]);

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
    const totalPages = Math.ceil(filteredData.length / itemsPerPage); // Use filteredData instead of data
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
    console.log(`Edit item ${item.SL}`, item); // Log the item data
    navigateFunc("/edit", { state: { contact: item } }); // Pass the item data to the edit page
  };

  const handleDeleteClick = (item) => {
    const newData = filteredData.filter((dataItem) => dataItem.SL !== item.SL);
    setFilteredData(newData);
    setSelectedItem(() => null); // Use a callback function to update the state

    // Update the display style of the select-dropdown div
    const dropdownDiv = document.getElementById(`select-dropdown-${item.SL}`);
    if (dropdownDiv) {
      dropdownDiv.style.display = "none";
    }
  };

  const generateCSV = () => {
    const csvHeader = "NAME,CATEGORY,MOBILE,EMAIL\n";
    const csvRows = filteredData
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

    // Define columns and data
    const columns = [
      { header: "No", dataKey: "no" },
      { header: "Name", dataKey: "name" },
      { header: "Category", dataKey: "category" },
      { header: "Mobile", dataKey: "mobile" },
      { header: "Email", dataKey: "email" },
    ];

    const data = filteredData.map((item, index) => ({
      no: index + 1,
      name: item.NAME,
      category: item.CATEGORY,
      mobile: item.MOBILE,
      email: item.EMAIL,
    }));

    // Use autoTable to create a table with borders
    doc.autoTable({
      columns: columns,
      body: data,
      startY: 30, // Start position for the table
      margin: { top: 20, left: 15, right: 15 }, // Adjust margins as needed
      theme: "grid", // Use 'grid' theme to get borders
      headStyles: { fillColor: [22, 160, 133] }, // Optional: Customize header styles
      styles: { overflow: "linebreak" }, // Optional: Handle text overflow
    });

    doc.save("contacts.pdf");
  };

  const handleIconClick = (iconName) => {
    if (iconName === "GoFile") {
      const tableData = filteredData
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
      const printContent = filteredData
        .map(
          (item) => `
      <tr>
        <td>${item.NAME}</td>
        <td>${item.CATEGORY}</td>
        <td>${item.MOBILE}</td>
        <td>${item.EMAIL}</td>
      </tr>
    `
        )
        .join("");

      const printWindow = window.open("", "", "width=800,height=600");
      printWindow.document.open();
      printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid black; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
          </style>
        </head>
        <body>
          <h1>Contact List</h1>
          <table>
            <thead>
              <tr>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>MOBILE</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              ${printContent}
            </tbody>
          </table>
        </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.focus(); // Focus on the new window
      setTimeout(() => {
        printWindow.print(); // Trigger print dialog
      }, 1000); // Adjust timeout as needed
    }
  };

  const newpage = () => {
    navigateFunc("/new");
  };

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);
    const filteredData = data.filter((item) =>
      item.CATEGORY.toLowerCase().includes(searchValue)
    );
    setFilteredData(filteredData);
    setCurrentPage(1); // Add this line
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
                      value={searchValue}
                      onChange={handleSearchChange}
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
                        {filteredData
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
                        {filteredData.map((item, index) => (
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
                          className={`contact-footer-btn2 ${
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
