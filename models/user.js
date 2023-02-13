const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;



const paymentSchema = new Schema({
  // Create payment schema
//const paymentSchema = new mongoose.Schema({
    transactionId: { type: String, default: uuid.v1() , required: true, unique: true },
    bankAccountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    cnicNumber: { type: String, required: true, match: /^\d{5}-\d{7}-\d{1}$/ },
    amount: { type: Number, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    dateTime: { type: Date, default: Date.now }
  });
  
  // Create payment model
  module.exports = mongoose.model('Payment', paymentSchema);
  
  //module.exports = mongoose.model('Transaction', paymentSchema);

//module.exports = mongoose.model('Product', productSchema);