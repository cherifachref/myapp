const Car = require("../models/Car");


exports.addCar = async(req,res) => {
    try { 

        

        const newCar = new Car ({
            userCar:req.body.userCar,
            userCarImage:req.body.userCarImage,
            make:req.body.make,
            model:req.body.model,
            year:req.body.year,
            articleImage:req.body.articleImage,
            likedByUserId:req.body.likedByUserId,
            likedByUserName:req.body.likedByUserName,
            goldCar:req.body.goldCar
            
        })
        await newCar.save()
        res.status(200).send({msg: "Car added successfully ...",newCar})
    } catch (error) {
        res.status(400).send({msg: "Can not add car !!!",error})
    }
}
 
exports.getCar = async(req,res) =>{
    try {
        res.status(200).send(await Car.find())
    } catch (error) {
        res.status(400).send({msg: "Can not get car !!!",error}) 
    }
}

exports.deleteCar = async(req,res)=>{
    try {
        const {_id} = req.params

        
         await Car.findOneAndDelete({_id})
         res.status(200).send({msg:'Car deleted..'})
     } catch (error) {
        res.status(400).send({msg:"can not delete Car with this id!!!",error})
     } 
}

exports.updateCar = async(req,res) => {

    try {
        const {_id} = req.params
        const result = await Car.updateOne({_id},{$set :{...req.body}})
        res.status(200).send({msg:"Color Car updated...",result})

    } catch (error) {
        res.status(400).send({msg: "Can not update Color Car !!!",error})
    }
}




