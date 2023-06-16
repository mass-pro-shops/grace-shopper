const router = require('express').Router();
const {
    models: { User },
} = require('../db');
const {requireToken} = require('./gateKeepingMiddleware')

module.exports = router;

//GET /api/users
router.get('/',requireToken, async (req, res, next) => {
    try {

        if (!req.user.isAdmin){
            return res.status(403).send("ah ah ah, you didn't say the magic word")
        }
        const users = await User.findAll({
            // explicitly select only the id and username fields - even though
            // users' passwords are encrypted, it won't help if we just
            // send everything to anyone who asks!
            attributes: ['id', 'username','address','name', 'email'],
        });
        res.json(users);
    } catch (err) {
        next(err);
    }
});

//GET /api/users/:id
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: ['id', 'username','address','name'],
        });
        res.send(user);
    } catch (error) {
        next(error);
    }
});

//POST /api/users
router.post('/', async (req, res, next) => {
    try {
        const { name, email, password, address, username } = req.body;
        const newUser = await User.create({
            name: name,
            email: email,
            password: password,
            address: address,
            username: username,
        });
        res.send(newUser);
    } catch (error) {
        next(error);
    }
});

//PUT /api/users/:id
router.put('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).send({ msg: 'User not Found' });
        }
        const { userId, ...userData } = req.body;
        userData.userId = userId;
        const updatedUser = await user.update(userData);
        res.send(updatedUser);
    } catch (error) {
        next(error);
    }
});

//only the logged in user can update their own info or delete it - NEED TO IMPLEMENT
//DELETE /api/users/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            res.status(404).send({ msg: 'User not Found' });
        }
        const data = await User.findByPk(req.params.id);
        await data.destroy();
        res.send(data);
    } catch (error) {
        next(error);
    }
});
