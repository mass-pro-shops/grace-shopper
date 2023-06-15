const {models:{ User }} = require('../db')

const requireToken  = async (req, res, next) => {
    try{
        console.log(req.headers, "this is the console log ------------------------------")
        const token = req.headers.authorization
        const user = await User.findByToken(token)
        req.user = user
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    requireToken
}