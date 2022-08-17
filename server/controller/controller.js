var Userdb = require('../model/model');
//Add new student
exports.create = (req, res)=>{

    if(!req.body){
        res.status(400).send({message: "Input Content"});
        return;
    }

    const user= new Userdb({
        name : req.body.name,
        email : req.body.email,
        balance : req.body.balance,
        date : req.body.date
    })

    user
     .save(user)
     .then(data=>{
        //res.send(data)
        res.redirect('/add-user');
     })

     .catch(err=>{
        res.status(500).send({ 
            message:err.message
        });
     });

}
//Find single student or all students
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found"})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error"})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message})
            })
    }
}
//Update the info of a student

exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Insert info"})
    }
    const id = req.params.id;

    Userdb.findByIdAndUpdate(id, req.body)
    .then(data=>{
        if(!data){
            res.status(404).send({message:'User Not Found'})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error"})
    })
}

//Remove a student

exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Error`})
            }else{
                res.send({
                    message : "User deleted "
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Error2"
            });
        });
}