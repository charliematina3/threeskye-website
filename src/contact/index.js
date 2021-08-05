var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var company = req.body.company;
	var message = req.body.message;
	var other = req.body.other;
	var research = req.body.research;
	var wealth = req.body.wealth;
	var threeskyeX = req.body.threeskyeX;
	var interests = research ? "Research Platform" : "";
  var content = `Name: ${name} \n Email: ${email} \n Company: ${company ? company : "n/a"} \n Message: ${message} \n Interests: ${interests}`;
  var headerStyle = "opacity: 0.7; color: #020a1d; font-size: 14px; width: 100%; margin-bottom: 0; font-weight: 500";
  var valueStyle = "font-size: 20px; width: 100%; margin-bottom: 36px; margin-top: 2px; font-weight: 500; color: #020A1D;";
  var hrStyle = "margin: 34px 0; border: none; height: 1px; width: 100%; background-color: #E2E4EA";
  var tokenActiveStyle = "display: inline-block; white-space: nowrap; font-size: 18px; padding: 3px 5px; background-color: #0D8EFD; font-weight: 400; color: #fff; border-radius: 5px; margin-right: 14px; margin-bottom: 8px;";
  var tokenDisabledStyle = "display: inline-block; white-space: nowrap; font-size: 18px; padding: 3px 5px; background-color: #D7D9DE; font-weight: 400; color: #fff; border-radius: 5px; margin-right: 14px; margin-bottom: 8px;";
  var logo = "";
	var html =
		"<div style='padding: 20px; padding-bottom: 40px; background-color: #f7f7f7; font-family: Google Sans'><div style='margin: 0 auto; box-shadow: 0px 2px 6px #0000001c; max-width: 700px; background-color: #fff; color: #02184a; padding: 20px 40px; padding-bottom: 50px; border-radius: 10px;'><hr style='"+hrStyle+"' /><h2 style='margin-bottom: 0; font-size: 21px; color: #020a1d;'>New 3SKYE website enquiry</h2><hr style='"+hrStyle+"' /><h4 style='"+headerStyle+"'>Name</h4><h3 style='"+valueStyle+"'>"+name+"</h3><h4 style='"+headerStyle+"'>Email</h4><h3 style='"+valueStyle+"'>"+email+"</h3><h4 style='"+headerStyle+"'>Company</h4><h3 style='"+valueStyle+"'>"+company+"</h3><h4 style='"+headerStyle+"'>Message</h4><h3 style='"+valueStyle+"'>"+message+"</h3><h4 style='margin-bottom: 6px !important; "+headerStyle+"'>Interest</h4><span style='"+(research ? tokenActiveStyle : tokenDisabledStyle)+"'>Research Platform</span><span style='"+(wealth ? tokenActiveStyle : tokenDisabledStyle)+"'>Wealth Platform</span><span style='"+(threeskyeX ? tokenActiveStyle : tokenDisabledStyle)+"'>3SKYE-x</span><span style='"+(other ? tokenActiveStyle : tokenDisabledStyle)+"'>Other</span></div></div>";

	var mail = {
		from: name,
		to: "charliematina@gmail.com", // Change to email address that you want to receive messages on
		subject: "New Message from 3SKYE Contact Form",
		html: html,
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: "fail",
			});
		} else {
			res.json({
				status: "success",
			});
		}
	});
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)