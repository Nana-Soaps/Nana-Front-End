import React, { useState } from "react";

function ContactUsForm(props) {
  const [formData, setFormData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };
  return (
    <form onSubmit={handleSubmit} className="contactUsForm">
      <label>
        Full Name
        <input onChange={handleChange} name="fullName" />
      </label>
      <label>
        E-mail <input onChange={handleChange} name="email" />
      </label>
      <label>
        Message <textarea onChange={handleChange} name="message" />
      </label>
      <button className="btn submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactUsForm;
