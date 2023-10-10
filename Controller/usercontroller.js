const usermanagement = require("../Model/usermodel");

const create_user = async (req, res) => {
  try {
    let User = new usermanagement({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    await User.save();
    res.json({
      message: "user created successfully",
    });
  } catch (error) {
    res.json({
      message: "user not created",
    });
  }
};

const update_user = async (req, res) => {
  try {
    let userId = req.body.userId;
    let updateUser = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    };
    await usermanagement.findByIdAndUpdate(userId, { $set: updateUser });
    res.json({
      message: "user updated",
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
};

const getUser = async (req, res) => {
  try {
    let users = await usermanagement.find();
    res.json(users);
  } catch (error) {
    res.json({
      message: "error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    let userId = req.body.userId;
    await usermanagement.findByIdAndDelete(userId);
    res.json({
      message: "user deleted",
    });
  } catch (error) {
    res.json({
      message: "error",
    });
  }
};

module.exports = {
  create_user,
  update_user,
  getUser,
  deleteUser,
};
