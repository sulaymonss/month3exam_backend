const nodeMailer = require("../../lib/mailerFunction");

module.exports = {
  GET_MAIL_INFO: async (req, res) => {
    try {
      const { name, address, email, cart } = req.body;
      if (!name || !address || !email) {
        return res.json({
          status: 400,
          msg: "All fields are required",
        });
      }
      if (!cart.length) {
        return res.json({
          status: 400,
          msg: "Select some food to order",
        });
      }
      nodeMailer(name, address, email, cart);
      res.json({ msg: "Order received" });
    } catch (err) {
      console.log(err.message);
      throw new Error(500);
    }
  },
};
