const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

require("dotenv").config();
const gmailPassword = process.env.GMAIL_PASSWORD;
const gmailEmail = process.env.GMAIL_EMAIL;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.post("/submit-form", (req, res) => {
	const { name, user_email, message } = req.body;

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: gmailEmail,
			pass: gmailPassword,
		},
	});

	let mailOptions = {
		from: `"Brandoriv Portfolio" <${gmailEmail}>`,
		to: gmailEmail,
		subject: `New Contact Form Submission from brandoriv.dev`,
		text: `Name: ${name}\nEmail: ${user_email}\n\nMessage: ${message}`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.send("Error sending email");
		} else {
			console.log("Email sent: " + info.response);
			res.send("Form submitted and email sent");
		}
	});
});
