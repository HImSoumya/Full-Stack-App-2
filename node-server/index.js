const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/TestUsersDB');
    console.log('Successfully connected to DB...')
}

const UsersSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    age: String,
    sex: String,
    govtidtype: String,
    govtid: Number,
    guardiantype: String,
    guardianname: String,
    email: String,
    emrnumber: Number,
    address: String,
    country: String,
    state: String,
    pincode: Number,
    city: String,
    occupation: String,
    nationality: String,
    religion: String,
    maritalstatus: String,
    bloodgroup: String
});

const User = mongoose.model('UserCollection', UsersSchema);


const app = express();

app.use(cors());
app.use(bodyParser.json())

app.post('/postdata', async (req, res) => {

    let user = new User();
    user.name = req.body.name;
    user.mobile = req.body.mobile;
    user.age = req.body.age;
    user.sex = req.body.sex;
    user.govtidtype = req.body.govttype;
    user.govtid = req.body.govtid;
    user.guardiantype = req.body.guardiantype;
    user.guardianname = req.body.guardianname;
    user.email = req.body.email;
    user.emrnumber = req.body.emergmobile;
    user.address = req.body.address;
    user.country = req.body.country;
    user.state = req.body.state;
    user.pincode = req.body.pincode;
    user.city = req.body.city;
    user.occupation = req.body.occupation;
    user.nationality = req.body.nationality;
    user.religion = req.body.religion;
    user.maritalstatus = req.body.mstatus;
    user.bloodgroup = req.body.bloodgroup;

    const doc = await user.save();
    console.log(doc)
    res.send(doc);
})

app.get('/getdata', async (req, res) => {
    const docs = await User.find({})
    res.json(docs)
})




app.listen(8082, () => {
    console.log('server started at port:8082');
})