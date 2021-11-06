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
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "nikcontacts@yandex.ru",
      pass: "OskinNikez123"
    }
  });
  transporter
    .sendMail({
      from: "nikcontacts@yandex.ru",
      to: "nikcontacts@yandex.ru",
      subject: "Заявка на видеосъемку",
      text: "Order",
      html: `
    <h3>Имя</h3><p>${name}</p>
    <h3>Номер телефона</h3><p>${phone}</p>
    <h3>Дата</h3><p>${date}</p>
    `
    })
    .then(success => {
      res.send(success);
    })
    .catch(err => {
      res.send(err);
    });
});

app.listen(PORT);
