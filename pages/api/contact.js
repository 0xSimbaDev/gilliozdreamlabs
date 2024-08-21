import { addContactToNotion } from '../../lib/contact'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const contact = req.body;

    try {
      await addContactToNotion(contact);
      res.status(200).json({ message: 'Contact added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}