var express = require('express');
var config = require('./config');
var bodyParser = require('body-parser');
var path = require('path')
//var cors = require('cors');
var nodemailer = require('nodemailer');

//Отправка почты
let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      user: config.MAIL,
      pass: config.PASSWORD_MAIL
    }
});

var app = express();

//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


if(process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ))
  })
}

app.post('/email', async (req, res) => {
  var title = req.body.Title;
  var text = req.body.Text;

  try {
    
    await transporter.sendMail({
      from: `"Сообщение с портфолио" <${config.MAIL}>`,
      to: "foker552@gmail.com",

      subject: title,
      text: text
    }, (err, info) => {
      if(err) return console.log('err', err)
    });
    res.status(200).json({valid: true, message: 'Успешно'});
  } catch (error) {
    console.log(error)
  }
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//error handler
/*app.use((error, req, res, next) => {
  res.status(error.status || 500)
  console.log(error.status);
  }
  //next();
);*/

app.listen(config.PORT, () => console.log(`Exampl app listening on port ${config.PORT}!`));
