import React from "react";
import "./contact-list.css";
import HeaderFramerComponent from "@/framer/header";

const ContactsList = ({ contacts }: { contacts: any }) => {
    console.log("contacts", contacts)

  return (
    <>
      <HeaderFramerComponent title="emergency contacts" variant="H2" />
      <div className="contacts-container" style={{ width: "400px" }}>
        <div className="contacts-scroll">
          {contacts.map((contact: any, index: number) => (
            <div key={index} className="contact-item">
              <div
                className="contact-image"
              >
                <div className="contact-initials">
                 {contact.firstName[0]}{contact.lastName[0]}
                </div>
              </div>
              <div className="contact-details">
                <p className="contact-name">{contact.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactsList;
