import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../context/types';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const { language } = useLanguage() as { language: Language };

  const translations: Record<Language, { 
    firstName: string;
    lastName: string; 
    email: string;
    phoneNumber: string;
    message: string;
    send: string;
  }> = {
    ENG: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phoneNumber: "Phone Number",
      message: "Message",
      send: "Send"
    },
    FR: {
      firstName: "Prénom",
      lastName: "Nom de famille",
      email: "E-mail",
      phoneNumber: "Numéro de téléphone",
      message: "Message",
      send: "Envoyer"
    }
  };

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full"> 
      <div className="flex flex-row sm:flex-col gap-3.5"> 
        <input
          className="border-gray-700 border text-mini bg-gray-600 flex-1 rounded-lg p-3.5 text-gray-500 focus:outline-none" 
          name="first_name"
          placeholder={translations[language].firstName} 
          type="text"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          className="border-gray-700 border text-mini bg-gray-600 flex-1 rounded-lg p-3.5 text-gray-500 focus:outline-none" 
          name="last_name"
          placeholder={translations[language].lastName} 
          type="text"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <input
        className="border-gray-700 border text-mini bg-gray-600 w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none" 
        name="email"
        placeholder={translations[language].email}
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        className="border-gray-700 border text-mini bg-gray-600 w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none" 
        name="phone_number"
        placeholder={translations[language].phoneNumber}
        type="text"
        value={formData.phone_number}
        onChange={handleChange}
        required
      />
      <textarea
        className="border-gray-700 border bg-gray-600 font-montserrat text-mini h-[111px] w-auto rounded-lg p-3.5 text-gray-500 focus:outline-none resize-none" 
        name="message"
        placeholder={translations[language].message}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button className="bg-blueviolet text-white font-semibold font-montserrat py-3 px-5 rounded-lg hover:bg-opacity-90 transition duration-300">
        {translations[language].send}
      </button>
    </form>
  );
};

export default ContactForm;