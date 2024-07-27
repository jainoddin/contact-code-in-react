import React, { createContext, useState } from 'react';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [newContactAdded, setNewContactAdded] = useState(false);

  const clearContacts = () => {
    setContacts([]);
    setNewContactAdded(false);
  };

  return (
    <ContactContext.Provider value={{ contacts, setContacts, clearContacts, newContactAdded, setNewContactAdded }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
