var request = require('request');

const Payment = require("../models/user");

exports.getAddMobile = (req, res,next) => {
  console.log('form');
  res.render('searchForm', {});
};
exports.getRecords = (req, res,next) => {
  const mobileNumber = req.query.mobileNumber;
  const page = parseInt(req.query.page || 1);
  let totalPages = 1;
  console.log("page is " + page);
  console.log("Mobile is " + mobileNumber);
 
  Payment
    .countDocuments({mobileNumber : mobileNumber})
    .then(numProducts => {
      totalPages = numProducts;

  return Payment.find({ mobileNumber: mobileNumber }).skip((page-1)*1).limit(1)})
    .then(transactions => {
      if (transactions.length > 0) {
        //const totalPages = Math.ceil(transactions.length / 1);
        const nextPage=page+1;
        const previousPage=page-1;
       // const exchangeRate = 0;
        //const amount = 0;
        console.log('total pages: '+ totalPages);
        //const amount = transactions.amount;
      
// var url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=PKR&apikey=GG5Q4M9HNW7N1SPZ'
//       request.get({
//         url: url,
//         json: true,
//         headers: {'User-Agent': 'request'}
//       }, (err, res, data) => {
//         if (err) {
//           console.log('Error:', err);
//         } else if (res.statusCode !== 200) {
//           console.log('Status:', res.statusCode);
//         } else {
//           // data is successfully parsed as a JSON object:
//          const exchangeRate = parseInt(data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
//          const amount = parseInt(transactions[0].amount)*exchangeRate;
//           console.log('Amount is : ', amount);
//         }
//     })
     

        res.render("searchResults", {
          pageTitle: "Transactions",
          transactions: transactions,//.slice((page - 1) * 1, page * 1),
          message: "",
          mobileNumber: mobileNumber,
          currentPage: page, 
          nextPage:nextPage,
          previousPage:previousPage,
          numPages:totalPages,
          //amount:amount
        });
      } else {
        res.render("searchResults", {
          pageTitle: "Transactions",
          currentPage: 1,
          path: "/transactions",
          message: "No transactions found with this mobile number"
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};