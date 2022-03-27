// require express
const express = require("express")
const { addCar, getCar, deleteCar, updateCar } = require("../controllers/car")

// require express router
const router = express.Router()







// crud car

router.post('/',addCar)

router.get('/',getCar)

router.delete('/:_id',deleteCar) 

router.put('/:_id',updateCar)









// export router
module.exports = router