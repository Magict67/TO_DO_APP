import React, { useState } from 'react';

const ContactView = () => {
  // Create one object to hold all form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  // This function updates the state every time you type a letter
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! We received your message.`);
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="contact-view" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Contact the Community</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <textarea 
          name="comments" 
          placeholder="Your Comments" 
          value={formData.comments} 
          onChange={handleChange} 
          rows="5"
        />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit Message
        </button>

      </form>
    </div>
  );
};

export default ContactView;