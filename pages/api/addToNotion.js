export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;  // Correctly extract the email from the request body

        const notionSecret = "";
        const databaseId = "e27216369e9c4317a2be5c9f1eedbcac";

        const { Client } = require('@notionhq/client');

        const notion = new Client({
            auth: notionSecret,
        });

        try {
            const response = await notion.pages.create({
                parent: { database_id: databaseId },
                properties: {
                    'Name': {
                        title: [
                            {
                                text: {
                                    content: 'New Entry'
                                },
                            },
                        ],
                    },
                    'Email': {
                        rich_text: [
                            {
                                text: {
                                    content: email
                                }
                            }
                        ]
                    },
                },
            });

            console.log(response);

            return res.status(200).json({ id: response.id });
        } catch (error) {
            console.error('Error creating page:', error);
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
