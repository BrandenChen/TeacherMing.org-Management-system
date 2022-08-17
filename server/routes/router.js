const express = require('express');
const route = express.Router(); 
const services = require('../services/render')
const controller = require('../controller/controller');
const axios = require('axios');
//Main
route.get('/',(req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
    res.render("index",{users:response.data});
    })
   
})
//Add
route.get('/add-user',(req,res)=>{
    res.render("add_user"); 
})
//Update
route.get('/update-user',(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })

})

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)


module.exports = route