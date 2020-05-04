var express = require('express');
var router = express.Router();
const creds = require('../models/emailConfig');
var nodemailer = require('nodemailer');

//config l'envoi d'email CONTACT PAGE ================================================
let transport = {
  host: 'smtp.gmail.com',
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

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



//envoyer un message depuis la page contact
router.post('/messages', async (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `Bonjour Oriane, \n\n Vous avez reçu un nouveau message de ${name} \n\n Email client : ${email} \n\n message: \n\n ${message} `
  console.log('hello', content)
  let mail = await transporter.sendMail({
    from: name,
    to: 'agnoste.loky@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }, (err, data) => {
    if (err) {
      console.log("message fail");
      res.json({
        msg: 'fail'
      })
    } else {
      console.log("message sent");
      res.json({ msg: 'success' })
    }
  })
  //console.log("Message sent: %s", mail.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
})

// /* post enrigistrer message dans mongo db. */
// router.post('/messages', async function (req, res, next) {
//   console.log(req.body);
//   let newMessages = new messageModel({
//     name: req.body.name,
//     email: req.body.email,
//     message: req.body.message
//   });
//   await newMessages.save();
//   res.json({ status: true });
// });

module.exports = router;

