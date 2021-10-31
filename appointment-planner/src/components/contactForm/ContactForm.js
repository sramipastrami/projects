import React from "react";

export const ContactForm = (props) => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
  } = props;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    //  ContactForm
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange} />
      <input
        type="tel"
        value={phone}
        onChange={handlePhoneChange}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      <input type="email" value={email} onChange={handleEmailChange} />
      <button type="submit" text="submit">
        Submit
      </button>
    </form>
  );
};
