import { useState } from 'react';

type CountryLabel = 'US' | 'FR' | 'UK' | 'DE' | 'JP' | 'CN' | 'AU' | 'IN' | 'BR' | 'RU' | 'PH' | 'SG';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    country_code: '+1',
    message: '',
  });
  const countryCodes: { code: string; label: CountryLabel }[] = [
    { code: "+1", label: "US" },
    { code: "+33", label: "FR" },
    { code: "+44", label: "UK" },
    { code: "+49", label: "DE" },
    { code: "+81", label: "JP" },
    { code: "+86", label: "CN" },
    { code: "+61", label: "AU" },
    { code: "+91", label: "IN" },
    { code: "+55", label: "BR" },
    { code: "+7", label: "RU" },
    { code: "+63", label: "PH" },
    { code: "+65", label: "SG" },
  ];

  const data = {
    contact_form: {
        "firstName": "First Name",
        "lastName": "Last Name",
        "email": "Email",
        "phoneNumber": "Phone Number",
        "message": "Message",
        "send": "Send"
    },
    country: {
      "US": "US",
      "FR": "FR",
      "UK": "UK",
      "DE": "DE",
      "JP": "JP",
      "CN": "CN",
      "AU": "AU",
      "IN": "IN",
      "BR": "BR",
      "RU": "RU",
      "PH": "PH",
      "SG": "SG"
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

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
      setFormData({ first_name: '', last_name: '', email: '', phone_number: '',country_code: '+1',  message: '' });
    } else {
      alert('An error occurred while submitting the contact information.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full">
      <div className="flex flex-row sm:flex-col gap-3.5">
        <input
          className="font-montserrat border-blueviolet border text-mini flex-1 rounded-lg p-3.5 text-dark_bg focus:outline-none"
          name="first_name"
          placeholder={data.contact_form?.firstName} 
          type="text"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <input
          className="font-montserrat border-blueviolet border text-mini flex-1 rounded-lg p-3.5 text-dark_bg focus:outline-none"
          name="last_name"
          placeholder={data.contact_form?.lastName}
          type="text"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <input
        className="font-montserrat border-blueviolet border text-mini w-auto rounded-lg p-3.5 text-dark_bg focus:outline-none"
        name="email"
        placeholder={data.contact_form?.email}
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <div className="flex">
      <select
        className="font-montserrat border-blueviolet border text-mini rounded-l-lg p-3.5 text-dark_bg focus:outline-none"
        name="country_code"
        value={formData.country_code}
        onChange={handleSelectChange}
      >
        {countryCodes.map((country) => (
          <option
            key={country.code}
            value={country.code}
            className="bg-gray-700 text-gray-200"
          >
            {data.country[country.label]} ({country.code})
          </option>
        ))}
      </select>
        <input
          className="font-montserrat border-blueviolet border text-mini w-full rounded-r-lg p-3.5 text-dark_bg focus:outline-none"
          name="phone_number"
          placeholder={data.contact_form?.phoneNumber}
          type="text"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        className="border-blueviolet border font-montserrat text-mini h-[111px] w-auto rounded-lg p-3.5 text-dark_bg focus:outline-none resize-none"
        name="message"
        placeholder={data.contact_form?.message}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button className="bg-blueviolet text-white font-semibold font-montserrat py-3 px-5 rounded-lg hover:bg-opacity-90 transition duration-300 cursor-pointer">
        {data.contact_form?.send}
      </button>
    </form>
  );
};

export default ContactForm;