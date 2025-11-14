const app = require("../server");
const { connect } = require("../models/connect");

module.exports = async (req, res) => {
    await connect();  // connect once per serverless instance
    return app(req, res);
};
