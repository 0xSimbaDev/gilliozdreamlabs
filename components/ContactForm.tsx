import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert('Contact information submitted successfully.');
        setFormData({ first_name: '', last_name: '', email: '', phone_number: '', message: '' });
    } else {
        alert('An error occurred while submitting the contact information.');
    }
};

return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full max-w-auto"> 
    <div className="flex flex-row sm:flex-col gap-3.5"> 
      <input
        className="border-gray-700 border text-mini bg-gray-600 flex-1 rounded-lg p-3.5 text-gray-500 focus:outline-none" 
        name="first_name"
        placeholder="First Name"
        type="text"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        className="border-gray-700 border text-mini bg-gray-600 flex-1 rounded-lg p-3.5 text-gray-500 focus:outline-none" 
        name="last_name"
        placeholder="Last Name"
        type="text"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
    </div>
    <input
      className="border-gray-700 border text-mini bg-gray-600 w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none" 
      name="email"
      placeholder="Email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      className="border-gray-700 border text-mini bg-gray-600 w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none" 
      name="phone_number"
      placeholder="Phone Number"
      type="text"
      value={formData.phone_number}
      onChange={handleChange}
      required
    />
    <textarea
      className="border-gray-700 border bg-gray-600 font-montserrat text-mini h-[111px] w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none resize-none" 
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      required
    />
    <button className="bg-blueviolet text-white font-semibold font-montserrat py-3 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
      Send
    </button>
  </form>
    );
};

export default ContactForm;