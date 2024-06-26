const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');

router.get('/', (req, res) => {
    res.send('Hey its working');
});

console.log();

if (process.env.NODE_ENV == "development") {
    router.post("/create", async function (req, res) {
        let owners = await ownerModel.find();
        if(owners.length > 0){
            return res
            .status(500)
            .send("You don't have permission to create a new owner");
        }
        let {fullName, email, password} = req.body;

        let createdOwner = await ownerModel.create({
            fullName,
            email,
            password,
        });
        res.send("You have permission to create a new owner");
    });
}

module.exports = router;