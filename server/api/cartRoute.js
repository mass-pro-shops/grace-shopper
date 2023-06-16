const router = require('express').Router()

router.get('/', async(req,res,next) => {
    try {
        res.send('get/cart')
    } catch(error) {
        throw new Error(error)
    }
})

router.post('/add', async(req,res,next) => {
    try {
         res.send('post/cart')
    } catch(error) {
        throw new Error(error)
    }
})

router.delete('/checkout', async(req,res,next) => {
    try {
        res.send('checkout/deletes products from cart')
    } catch(error) {
        throw new Error(error)
    }
})

router.put('/decrement', async(req,res,next) => {
    try {
        res.send('decrement the qty of an item')
    } catch(error) {
        throw new Error(error)
    }
})

router.put('/increment', async(req,res,next) => {
    try {
        res.send('increment the qty of an item')
    } catch(error) {
        throw new Error(error)
    }
})

router.delete('/removeItem', async(req,res,next) => {
    try{
        res.send('removeItem')
    } catch(error) {
        throw new Error(error)
    }
})

router.get('/countProducts', async(req,res,next) => {
    try {
        res.send('get total')
    } catch(error) {
        throw new Error(error)
    }
})

router.get('/totalAmount', async(req,res,next) => {
    try {
        res.send('get total amount')
    } catch(error) {
        throw new Error(error)
    }
})
module.exports = router