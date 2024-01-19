const  express = require('express');
const app = express();
const mongoose = require('mongoose');
const Test = require("./models/Test");

mongoose.connect('mongodb://127.0.0.1:27017/test');
const port = 3000;

app.set('view engine', 'ejs');

const getRandom = (arr) => {
    let rno = Math.floor(Math.random()*(arr.length-1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index',{foo:'FOO'});
  })
  app.get('/generate', async (req, res) => {

    //Generate Rendom Data
    let rendomNames = ["Hari","Govind", "Krishna", "Mohan", "Gopal", "Madhav", "Kanha", "Dwarkadhish"]
    let rendomLang = ["java", "C++", "Python", "Kotlin", "Js"]
    let rendomCity = ["Vrindavan", "Mathura", "Dwarka", "Kashi", "Mayapur", "Puri", "Haridwar"]

    for(let i = 0; i < 10; i++){
        let e = await Test.create({
            name: getRandom(rendomNames),
            salary:Math.floor(Math.random(0, 2500000)),
            language: getRandom(rendomLang),
            city: getRandom(rendomCity),
            isMarried: Math.random()>0?true:false,
        });
        console.log(e);
    }
        res.json({ success: true }); // Send a JSON response indicating success
   
});


app.listen(port, ()=>{
    console.log(`Example app listen on port ${port}`);
})
