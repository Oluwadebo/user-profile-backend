const mongoose = require('mongoose');
const UserModel = require('../model/model');
const cloudinary = require('cloudinary')

const display = (req, res) => {
    UserModel.find((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send({ result })
        }
    })
}

const del = (req, res) => {
    let { id } = req.body;
    UserModel.findByIdAndDelete({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
}

const file = (req, res) => {
    let userfile = req.body.file;
    cloudinary.v2.uploader.upload(userfile, { folder: "sqi" }, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ message: "file fail to upload" })
        } else {
            const myimage = result.url;
            let Newmodel = new UserModel({ ...req.body, file: myimage })
            Newmodel.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({ message: "saved", status: true })
                }
            })
        }
    });
}

module.exports = { display, del, file };
