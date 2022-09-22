const express = require('express');

const router = express.Router()


//Controllers
const { register, login, listUser, editUser, deleteUser, currentUser
 } = require("../controllers/auth")

//middleware
const { auth,adminCheck } = require('../middlewares/auth')


//@Endpoint http://localhost:3000/api/register
//@Method   POST
//@Access   Public
router.post("/register", register);

//@Endpoint http://localhost:3000/api/login
//@Method   POST
//@Access   Public
router.post("/login", login);

//@Endpoint http://localhost:3000/api/current-user
//@Method   POST
//@Access   Provate
router.post("/current-user", auth, currentUser);

//@Endpoint http://localhost:3000/api/current-admin
//@Method   POST
//@Access   Provate
router.post("/current-admin", auth,adminCheck, currentUser);

module.exports = router