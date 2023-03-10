const FB = require("../utils/firebase");
const User = require("../model/user");
const { extractToken } = require("../utils/helperFunc");

exports.signup = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.accessToken) {
      res.json({ status: "failed", message: "Token not found !" });
      return;
    }
    const verified = await FB.verifyToken(body.accessToken);
    console.log(verified);
    const data = {
      userName: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // mobileNumber: req.body.phone,
    };
    const user = await User.create(data);
    // const user = await User.findOne({ email: req.body.email });
    res.json({
      status: "success",
      token: body.accessToken,
      user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err?.message,
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.accessToken) {
      return res.json({ status: "failed", message: "Token not found !" });
    }

    const verified = await FB.verifyToken(body.accessToken);
    if (!verified)
      return res.json({
        status: "failed",
        message: "Unauthorized token !",
      });
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.json({
        status: "success",
        user,
        token: body.accessToken,
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err?.message,
    });
  }
};

exports.googleSignup = async (req, res, next) => {
  try {
    const { userName, image, email, accessToken } = req.body;
    if (!accessToken) {
      res.json({ status: "failed", message: "Token not found !" });
      return;
    }
    const verified = await FB.verifyToken(accessToken);
    if (!verified)
      return res.json({
        status: "failed",
        message: "Unauthorized token !",
      });
    const user = await User.findOne({ email });
    if (user) {
      return res.json({
        status: "success",
        user,
        token: accessToken,
      });
    }
    const data = { userName, email, image };
    const newUser = await User.create(data);

    res.json({
      status: "success",
      user: newUser,
      token: accessToken,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err?.message,
    });
  }
};

exports.checkIsAuth = async (req, res, next) => {
  try {
    // Extract token
    const token = extractToken(req);
    if (!token) {
      return res.json({ status: "failed", message: "Token not found !" });
    }
    console.log("dasdaasdasdads");

    // Verify token
    const verified = await FB.verifyToken(token);
    if (!verified)
      return res.json({
        status: "failed",
        message: "Unauthorized token !",
      });
    // get user info from DB
    const user = await User.findOne({ email: verified.email });
    // append user data on req as req.user
    req.user = user;
    console.log("dasdas");
    next();
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err?.message,
    });
  }
};
