const express = require("express");
const nodemailer = require("nodemailer");
const multer = require('multer');
const batches = require("./data/batches");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
dotenv.config();

// connectDB();



app.use(cors());
// app.use(express.json());

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.GMAIL_APP_PASSWORD,
//     }
//   });
  
//   const storage = multer.memoryStorage();
//   const upload = multer({ storage });
  
//   app.post("/api/send-result", upload.single('file'), (req, res) => {
//     try {
//       const file = req.file;
//       const { url } = req.body; // Assuming the URL is sent in the request body
  
//       if (!file && !url) {
//         return res.status(400).json({ error: 'No file or URL provided' });
//       }
      
//       console.log('File details:', file);
//       console.log('File buffer:', file ? file.buffer : null);

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'aparnabraj2019@gmail.com', // Change this to the recipient's email
//         subject: 'Exam Result',
//         text: 'Hi, attached is the exam result.',
//         attachments: [{
//           filename: 'result.pdf', // Specify the desired filename
//           content: file.buffer,
//         }],
//       };
  
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error:', error);
//           return res.status(500).json({ error: 'Error sending email' });
//         } else {
//           console.log('Email sent:', info.response);
//           return res.json({ message: 'Email sent successfully' });
//         }
//       });
//     } catch (error) {
//       console.error('Error:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }
//   });

app.get("/",(req,res) => {
    res.send("API is running...");
});

app.get("/api/batches", (req,res) => {
    res.json(batches);
});

app.get("/api/batches/:id", (req,res) => {
    console.log("Accessed /api/batches/:id");

    const { id } = req.params;
    
    const batch = batches.find((n) => n.id === id.toString());
    console.log("Batch:", batch);
    res.send(batch);
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));