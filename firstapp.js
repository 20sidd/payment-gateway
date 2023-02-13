const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const cnics = require('cnics-checker');
const uuid = require('uuid');
const userRoutes = require('./routes/user');
const transactionRoutes = require('./routes/transaction');
const errorController = require('./controllers/error');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname, 'public')));
//app.get(req,res=>{})
app.get('/', function(req, res) {
res.render('home.ejs', {});
});
app.use('/user', userRoutes);
app.use(transactionRoutes);
app.use(errorController.get404);

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://pertinacious18:dausasm100@cluster0.ozeao62.mongodb.net/test'
  )
  //mongodb+srv://pertinacious18:dausasm100@cluster0.ozeao62.mongodb.net/test
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

// Create payment schema
// const paymentSchema = new mongoose.Schema({
//   transactionID: String,
//   bankName: String,
//   accountNumber: String,
//   cnic: String,
//   amount: Number,
//   email: String,
//   mobileNumber: String,
//   date: Date
// });

// Create payment model
//const Payment = mongoose.model('Payment', paymentSchema);

// Create payment form
// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/" method="post">
//       <label for="bankName">Bank Name:</label>
//       <select name="bankName" id="bankName">
//         <option value="Bank A">Bank A</option>
//         <option value="Bank B">Bank B</option>
//         <option value="Bank C">Bank C</option>
//       </select>
//       <br><br>
//       <label for="accountNumber">Account Number:</label>
//       <input type="text" name="accountNumber" id="accountNumber">
//       <br><br>
//       <label for="cnic">CNIC:</label>
//       <input type="text" name="cnic" id="cnic">
//       <br><br>
//       <label for="amount">Amount:</label>
//       <input type="text" name="amount" id="amount">
//       <br><br>
//       <label for="email">Email:</label>
//       <input type="email" name="email" id="email">
//       <br><br>
//       <label for="mobileNumber">Mobile Number:</label>
//       <input type="text" name="mobileNumber" id="mobileNumber">
//       <br><br>
//       <input type="submit" value="Submit">
//     </form>
//   `);
// });

// // Save payment to database
// app.post('/', (req, res) => {
//   // Validate CNIC
//   if (!cnics.validate(req.body.cnic)) {
//     res.send('Invalid CNIC');
//     return;
//   }
  
//   // Generate transaction ID
//   const transactionID = uuid.v4();
  
//   // Create payment object
//   const payment = new Payment({
//     transactionID: transactionID,
//     bankName: req.body.bankName,
//     accountNumber: req.body.accountNumber,
//     cnic: req.body.cnic,
//     amount: req.body.amount,
//     email: req.body.email});
