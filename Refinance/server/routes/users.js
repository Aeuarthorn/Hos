const express = require('express');
const { model } = require('mongoose');

const router = express.Router()
//Controllers
const { listUsers,
    readUsers,
    updateUsers,
    deleteUsers,
    changeStatus,
    changeRole,
} = require("../controllers/users")

// middleware
const { auth, adminCheck } = require("../middlewares/auth");

//@Endpoint http://localhost:5000/api/users
//@Method   GET
//@Access   Private
router.get("/users", auth, adminCheck, listUsers);

//@Endpoint http://localhost:5000/api/users:id
//@Method   GET
//@Access   Public
router.get("/users/:id", readUsers);

//@Endpoint http://localhost:5000/api/users:id
//@Method   PUT
//@Access   Public
router.put("/users/:id", updateUsers);

//@Endpoint http://localhost:5000/api/users:id
//@Method   DELETE
//@Access   Public
router.delete("/users/:id", deleteUsers);

//@Endpoint http://localhost:5000/api/change-status
//@Method   POST
//@Access   Private
router.post("/change-status", auth, adminCheck, changeStatus);

//@Endpoint http://localhost:5000/api/change-role
//@Method   POST
//@Access   Private
router.post("/change-role", auth, adminCheck, changeRole);

module.exports = router;
