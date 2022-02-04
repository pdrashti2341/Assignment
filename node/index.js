const { error } = require('console');
const e = require('express');
const express = require('express');
const { send } = require('express/lib/response');
const res = require('express/lib/response');
// const res = require('express/lib/response');
const fs = require('fs');
const app = express();
app.use(express.json());

var user = [
    

];
fs.readFile('./users.json','utf-8',(error,data)=>{
    if(error){
        console.log("ERROR")
    }
    else{
        user = JSON.parse(data);
    }
});

app.get('/',(req,res)=>{
    res.send("LANDING PAGE OR HOME PAGE")
})

app.get('/api/users',(req,res)=>{
    res.send(user);
})

app.get('/api/users/:id',(req,res)=>{
    const findedUser = user.find(uid => uid.id===parseInt(req.params.id));
    if(!findedUser) return res.status(404).send("ERROR USER WITH THIS ID IS NOT VALID");
    res.send(findedUser); 
})

app.post('/api/users',(req,res)=>{
    const newUser = {
        id: user.length + 1,
        name: req.body.name,
        password: req.body.password,
        gender: req.body.gender,
        birthdate: req.body.birthdate,
        age : req.body.age,
        country : req.body.country,
        phone : req.body.phone
    }
    user.push(newUser);
    fs.writeFile('./users.json', JSON.stringify(user) , 'utf-8',(error)=>{
        if(error){
            // console.log("SOMETHING WENT WRONG");
            res.send("Something went wrong");
        }
        else{
            // console.log("USER ADDED");
            res.send("USER ADDED");
        }
    })
})

app.delete('/api/users/:id', (req, res) => {
    const users = user.find(u => u.id === parseInt(req.params.id));
    if (!users) return res.status(404).send("User does not exist!");
    const position = user.indexOf(user);
    user.splice(position, 1);
    fs.writeFile("./users.json", JSON.stringify(user), "utf-8", (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Deleted data");
        res.send("User deleted")
      }
    });
  });

app.put('/api/users/:id', (req, res) => {
    const users = user.find(u => u.id === parseInt(req.params.id));
    if (!users) return res.status(404).send("User does not exist!");  
    users.name = req.body.name;
    users.password = req.body.password;
    users.gender = req.body.gender;
    users.birthdate = req.body.birthdate;
    users.age = req.body.age;
    users.country = req.body.country;
    users.phone = req.body.phone;
  
    fs.writeFile("./users.json", JSON.stringify(user), "utf-8", (error) => {
      if (error) {
        console.log(error);
      } else {
        res.send("Successfully Updated User");
        // console.log("Updated");
      }
    });
  });

app.listen(80, ()=>{
    console.log("Use postname for it");
})