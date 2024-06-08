const Razorpay = require("razorpay");


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});

// https://documenter.getpostman.com/view/24441701/2s93kz6REm
// https://razorpay.com/docs/partners/aggregators/partner-auth/payment-gateway/