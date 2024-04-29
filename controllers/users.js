const { get, post } = require("../models/User");
exports.get = (ctx) => {
  try {
    const data = get();
    ctx.status = 200;
    ctx.body = { statuscode: "Success get method", user: data };
  } catch (error) {
    ctx.status = 400;
    ctx.body = "failed";
  }
};

exports.post = (ctx) => {
    try {
        const data = post();
        ctx.status = 200;
        ctx.body = { statuscode: "Success post method", user: data };
      } catch (error) {
        ctx.status = 400;
        ctx.body = "failed";
      }
};
