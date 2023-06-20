require('dotenv').config()
const router = require('express').Router()
const OrderHistory = require('../db/models/OrderHistory');
const products = require('../db/models/Product')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


router.post('/create-checkout-session', async (req, res) => {
  const line_items = req.body.cartItems.map(item => {
    return {
        price_data: {
          currency:'usd',
          product_data: {
            name: item.name,
            images: [item.image],
            metadata: {
              id: item.id
            }
          },
          unit_amount: Math.floor(item.price * 100)
        },
        quantity: item.cartQuantity
    }
  })
    const session = await stripe.checkout.sessions.create({
      customer_email: 'customer@example.com',
      submit_type: 'donate',
      billing_address_collection: 'auto',
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
      line_items,
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,
    });
  
    res.send({url: session.url});
  });

router.get('/order-history', async(req,res,next) => {
  try {
    const order_history = await OrderHistory.findAll()
    res.send(order_history)
  } catch(error) {
    next(error)
  }
})
router.post('/create-order-history', async(req,res,next) => {
  const cart_items = req.body.cartItems.map(item => {
    OrderHistory.create({
      name: item.name,
      price: item.price,
      description: item.description,
      image: item.image,
      orderQuantity: item.cartQuantity
    })
  }) 
  res.send(cart_items)
})
module.exports = router