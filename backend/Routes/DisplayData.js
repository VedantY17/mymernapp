const express = require("express")
const router = express.Router()

router.post('/smartphoneData',(req,res)=>{
    try {

        res.send([global.smartphones, global.smartphoneCategories])
    } catch (error) {
        console.error(error.message);
        res.send("Server error")
    }
})



module.exports = router;