const experess = require("express")
const { registerUser, loginUser } = require("../controllers/userController")

const router = experess.Router();

router.post("/login", loginUser)

router.post("/signup", registerUser)


module.exports = router