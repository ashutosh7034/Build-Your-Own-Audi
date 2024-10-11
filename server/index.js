const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    });

    res.status(200).json({ message: 'Form submitted successfully!', contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
