const bcrypt = require('bcryptjs') //import bcryptjs
const User = require('../models/User') //import model
const jwt = require('jsonwebtoken');


exports.listUsers = async (req, res) => {
    try { //code
        const user = await User.find({}).select("-password").exec();
        res.send(user)
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error!!');
    }
};

exports.readUsers = async (req, res) => {
    try { //code
        const id = req.params.id
        const user = await User.findOne({ _id: id }).select("-password").exec()
        res.send(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!');
    }
};

exports.updateUsers = async (req, res) => {
    try { //code
        var { id, password } = req.body.values
        //1 gen salt
        const salt = await bcrypt.genSalt(10);
        //encrypt
        var enPassword = await bcrypt.hash(password, salt); //เข้ารหัส
        const user = await User.findOneAndUpdate(
            { _id:id},  //ค้นหาอะไร
            { password: enPassword }  // อัพเดตอะไร
        );
        res.send(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!');
    }
};

exports.deleteUsers = async (req, res) => {
    try { //code
        const id = req.params.id
        const user = await User.findOneAndDelete({ _id: id });
        res.send(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!');
    }
};

exports.changeStatus = async (req, res) => {
    try { //code
        console.log(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.id },  //ค้นหาอะไร
            { enabled: req.body.enabled }  // อัพเดตอะไร
        );
        res.send(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!');
    }
};

exports.changeRole = async (req, res) => {
    try { //code
        console.log(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.id },  //ค้นหาอะไร
            { role: req.body.role }  // อัพเดตอะไร
        );
        res.send(user);
    } catch (err) {
        console.log(err)
        res.status(500).send('Server Error!!');
    }
};
// exports.majorUser = async (req, res) => {
//     try { //code
//         console.log(req.body);
//         const user = await User.findOneAndUpdate(
//             { _id: req.body.id },  //ค้นหาอะไร
//             { role: req.body.role }  // อัพเดตอะไร
//         );
//         res.send(user);
//     } catch (err) {
//         console.log(err)
//         res.status(500).send('Server Error!!');
//     }
// };