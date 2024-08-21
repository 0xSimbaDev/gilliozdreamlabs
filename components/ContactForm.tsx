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
    <form onSubmit={handleSubmit} className="self-stretch flex flex-col items-start justify-start gap-3.5">
      <div className="self-stretch flex flex-row items-start justify-start gap-3.5 z-[4]">
        <input
          className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 flex-1 rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500"
          name="first_name"
          placeholder="First Name"
          type="text"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 flex-1 rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500"
          name="last_name"
          placeholder="Last Name"
          type="text"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <input
        className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 self-stretch rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500 z-[3]"
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="border-gray-700 border-[1px] border-solid [outline:none] font-montserrat text-mini bg-gray-600 self-stretch rounded-8xs flex flex-col items-start justify-center py-3 px-3.5 text-gray-500 z-[2]"
        name="phone_number"
        placeholder="Phone Number"
        type="text"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />
      <textarea
        className="border-gray-700 border-[1px] border-solid bg-gray-600 font-montserrat text-mini [outline:none] self-stretch rounded-8xs box-border h-[111px] flex flex-col items-start justify-start py-3 px-3.5 text-gray-500 z-[1]"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button className="cursor-pointer [border:none] py-3 px-2.5 bg-blueviolet self-stretch rounded-8xs flex flex-row items-center justify-center z-[0]">
        <div className="relative text-lg tracking-[-0.01em] font-semibold font-montserrat text-white text-left">
          Send
        </div>
      </button>
    </form>
  );
};

export default ContactForm;