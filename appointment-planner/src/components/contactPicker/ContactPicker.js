import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <div>
      <select id="framework" onChange={onChange}>
        <option>No contact selected</option>
        {contacts.map((contact) => (
          <option value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
