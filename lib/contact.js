const { Client } = require('@notionhq/client');

// Initialize the Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

async function addContactToNotion(contact) {
  if (!contact.first_name || !contact.last_name) {
    throw new Error('Both first name and last name are required');
  }

  console.log(contact.phone_number)

  const fullName = `${contact.first_name} ${contact.last_name}`;
  const fullPhoneNumber = `${contact.country_code}${contact.phone_number}`;

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: { 
            title: [{ text: { content: fullName } }] 
        },
        Email: {
            email: contact.email || null,
        },
        Phone: {
            phone_number: fullPhoneNumber || null,
        },
        Message: {
            rich_text: [
                {
                    text: {
                        content: contact.message || "", 
                    },
                },
            ],
        },
      },
    });
    console.log('Contact added to Notion:', response);
  } catch (error) {
    console.error('Error adding contact to Notion:', error);
    throw error;
  }
}

module.exports = { addContactToNotion };