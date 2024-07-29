import React from "react";
import ContactList from "./components/ContactList";
import ContactNew from "./components/ContactNew";
import {  Route, Routes } from "react-router-dom";
import Editcontact from "./components/Editcontact";

const App = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<ContactList></ContactList>}></Route>
          <Route path="/new" element={<ContactNew></ContactNew>}></Route>
          <Route path="/edit" element={<Editcontact></Editcontact>}></Route>
        
        </Routes>
      
    </>
  );
};

export default App;
