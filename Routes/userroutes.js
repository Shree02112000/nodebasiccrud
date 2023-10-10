const express = require("express");
const router = express.Router();

const userController = require("../Controller/usercontroller");

router.post("/createuser", userController.create_user);
router.put("/updateuser", userController.update_user);
router.get("/getuser", userController.getUser);
router.delete("/deleteuser", userController.deleteUser);

module.exports = router;
