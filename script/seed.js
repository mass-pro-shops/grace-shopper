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
    ]);

    const products = await Promise.all([
        Product.create({
            name: 'Nike Shoe',
            price: 69.99,
            description: 'Its a shoe',
            image: 'https://sothebys-com.brightspotcdn.com/dims4/default/07f69eb/2147483647/strip/true/crop/658x358+0+0/resize/684x372!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F00%2F76%2F0703bab14d9db8e90b9594ffa9dc%2Fsothebys-md.brightspotcdn.jpg',
            rating: 4.5,
            quantity: 2,
            category:'desktop'
        }),
        Product.create({
            name: 'Nike Boot',
            price: 69.99,
            description: 'Its a Boot',
            image: 'https://deichmann.scene7.com/asset/deichmann/US_01_702208_00?$rr_main$&defaultImage=default_obs',
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
