const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken")

router.post('/', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username})
        !user && res.stat(401).json('Wrong username!')

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY
        )
        const generalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        generalPassword !== req.body.password &&
        res.status(401).json('Wrong password!')

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn:"3d"}
        );

        const { password, ...others } = user._doc
        res.status(200).json({...others, accessToken})

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
