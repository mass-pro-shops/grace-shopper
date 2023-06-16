'use strict';

const {
    db,
    models: { User, Product },
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log('db synced!');

    // Creating Users
    const users = await Promise.all([
        User.create({
            username: 'cody',
            password: '123',
            name: 'Cody',
            address: '123 main',
        }),
        User.create({
            username: 'murphy',
            password: '123',
            name: 'Cody',
            address: '123 main',
        }),
        User.create({
            username: 'admin',
            password: '123',
            name: 'admin',
            address: '123 main',
            isAdmin:true,
        }),
    ]);

    const products = await Promise.all([
        Product.create({
            name: 'Surface Pro 4',
            price: 69.99,
            description: 'Surface Pro 4',
            category: 'laptop',
            image: 'https://www.shutterstock.com/image-vector/laptop-blank-screen-silver-color-260nw-1382811209.jpg',
            rating: 4.5,
            quantity: 2,
            category:'desktop'
        }),
        Product.create({
            name: 'Apple IMagineWorking 4',
            price: 69.99,
            description: 'Its Apple. You will buy it.',
            category: 'laptop',
            image: 'https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: 'GPX Mini Projector 4',
            price: 69.99,
            description: 'GPX Mini Projector 4',
            category: 'projector',
            image: 'https://gpx.com/pub/media/catalog/product/cache/7f13490ce56db5f85e393e4d6203ce13/p/j/pj609b-angle-rc_copy.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: 'Apple IMagineWorking 6',
            price: 69.99,
            description: 'Its Apple. You will buy it.',
            category: 'projector',
            image: 'https://m.economictimes.com/thumb/msid-97834547,width-1417,height-1417,resizemode-4,imgsize-61124/5-of-the-best-projectors-in-india.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: 'Headdy Phones',
            price: 69.99,
            description: 'Cant think of anything',
            category: 'audio',
            image: 'https://www.energysistem.com/cdnassets/products/45303/front_2000.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: 'Beats by Chris Brown',
            price: 69.99,
            description: 'Better Listen.',
            category: 'audio',
            image: 'https://media.wired.com/photos/63e69de969cf98bf35404277/191:100/w_2580,c_limit/Best-Wireless-Headphones-Featured-Focal-Bathys-Gear.jpg',
            rating: 4.1,
            quantity: 1,
            category: 'laptop'
        }),
    ]);

    console.log(`seeded ${users.length} ${products.length} users & products`);
    console.log(`seeded successfully`);
    return {
        users: {
            cody: users[0],
            murphy: users[1],
        },
    };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
    console.log('seeding...');
    try {
        await seed();
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        console.log('closing db connection');
        await db.close();
        console.log('db connection closed');
    }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
    runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
