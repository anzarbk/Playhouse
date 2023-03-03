const FB = require("../utils/firebase");
const User = require("../model/user");

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
    await User.create(data);
    const user = await User.findOne({ email: req.body.email });
    res.json({
      status: "success",
      name: user.userName,
      email: user.email,
      token: body.accessToken,
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
    console.log(body);
    if (!body.accessToken) {
      return res.json({ status: "failed", message: "Token not found !" });
    }

    const verified = await FB.verifyToken(body.accessToken);
    console.log(verified);
    res.json({
      status: "success",
    });
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
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.json({
        status: "success",
      });
    }
    const data = { userName, email, image };
    const newUser = await User.create(data);

    res.json({
      status: "success",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    res.json({
      status: "error",
      message: err?.message,
    });
  }
};
