const Payment = require('../models/user');
const uuid = require('uuid');

exports.getAddUser = (req, res, next) => {
  res.render("addUser",{});
//     res.send(`
//       <form action="/user/add-user" method="post">
//         <label for="bankName">Bank Name:</label>
//         <select name="bankName" id="bankName">
//           <option value="Bank A">Bank A</option>
//           <option value="Bank B">Bank B</option>
//           <option value="Bank C">Bank C</option>
//         </select>
//         <br><br>
//         <label for="accountNumber">Account Number:</label>
//         <input type="text" name="accountNumber" id="accountNumber">
//         <br><br>
//         <label for="cnic">CNIC:</label>
//         <input type="text" name="cnic" id="cnic">
//         <br><br>
//         <label for="amount">Amount:</label>
//         <input type="text" name="amount" id="amount">
//         <br><br>
//         <label for="email">Email:</label>
//         <input type="email" name="email" id="email">
//         <br><br>
//         <label for="mobileNumber">Mobile Number:</label>
//         <input type="text" name="mobileNumber" id="mobileNumber">
//         <br><br>
//         <input type="submit" value="Submit">
//       </form>
//     `);
    
   };
exports.postAddUser = (req, res, next) => {
  const payment = new Payment({
        //transactionID: transactionID,
        bankName: req.body.bankName,
        bankAccountNumber: req.body.accountNumber,
        mobileNumber: req.body.mobileNumber,
        cnicNumber: req.body.cnic,
        amount: req.body.amount,
        email: req.body.email,
    });
    payment
      .save()
      .then(result => {
        // console.log(result);
        console.log('Created User');
        res.redirect('/user/add-user');
      })
      .catch(err => {
        console.log(err);
      });
   };