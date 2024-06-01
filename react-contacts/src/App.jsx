import React, { useState } from "react";
import "./App.css";
import Contacts from "./Component.jsx/Contacts";
import ContactsForm from "./Component.jsx/ContactsForm";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Sarah Osu", phone: "0234521380", location: "Kumasi" },
    { name: "James Daniel", phone: "0567890987", location: "Accra" },
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="container">
      <h1>Contact database</h1>
      <div className="main-content">
        <ContactsForm onAddContact={handleAddContact} />
        <Contacts contacts={contacts} />
        

      </div>
    </div>
  );
}

export default App;