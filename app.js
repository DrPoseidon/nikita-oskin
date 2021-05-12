const app = require("express")();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/sendEmail", (req, res) => {
  const { name, phone, date } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "nikoskcontacts@gmail.com",
      pass: "OskinNikez123"
    },
    from: "nikoskcontacts@gmail.com"
  });
  transporter
    .sendMail({
      to: "nikoskcontacts@gmail.com",
      subject: "Заявка на видеосъемку",
      text: "Hello world?",
      html: `
    <h3>Имя</h3><p>${name}</p>
    <h3>Номер телефона</h3><p>${phone}</p>
    <h3>Дата</h3><p>${date}</p>
    `
    })
    .then(res.sendStatus(200));
});

app.listen(PORT);
