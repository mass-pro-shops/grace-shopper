require('dotenv').config()
const router = require('express').Router()
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

module.exports = router