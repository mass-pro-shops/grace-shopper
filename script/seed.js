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
            name: 'Surface Pro 4',
            price: 69.99,
            description: 'Surface Pro 4',
            category: 'laptop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Microsoft_Surface_Pro_4.png',
            rating: 4.5,
            quantity: 2,
            category:'desktop'
        }),
        Product.create({
            name: 'Apple IMagineWorking 4',
            price: 69.99,
            description: 'Great for starters, terrible in general',
            category: 'laptop',
            image: 'https://banner2.cleanpng.com/20181117/jux/kisspng-razer-blade-14-razer-blade-stealth-13-laptop-r-5bf078f5dee6a1.221581541542486261913.jpg',
            rating: 4.1,
            quantity: 1,
        }),
        Product.create({
            name: "MacBook Pro",
            price: 1499.99,
            description: "Still runs like a beauty",
            category: "desktop",
            image: "https://i.pinimg.com/originals/a4/62/08/a46208b6977149f230e2d86d8a9c3470.png",
            rating: 4.7,
            quantity: 3,
          }),
          
          Product.create({
            name: "Dell XPS 13",
            price: 1299.99,
            description: "Ever wanted a jet engine?",
            category: "desktop",
            image: "https://www.cpapracticeadvisor.com/wp-content/uploads/sites/2/2022/07/20368/old_dell_computers_1_.5649f352a97ef.png",
            rating: 4.3,
            quantity: 21,
          }),
          
          Product.create({
            name: "HP Pavilion",
            price: 899.99,
            description: "Get the best of both worlds",
            category: "laptop",
            image: "https://m.media-amazon.com/images/I/71-mNJLIR5L._AC_UF1000,1000_QL80_.jpg",
            rating: 4.1,
            quantity: 10,
          }),
          
          Product.create({
            name: "Lenovo ThinkPad",
            price: 1099.99,
            description: "Get thinkin with the ThinkPad",
            category: "laptop",
            image: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA/lenovo-laptop-thinkpad-t490-hero-1126.png",
            rating: 4.4,
            quantity: 12,
          }),
          
        //projector/tv stuff-----------
        Product.create({
            name: 'GPX Mini Projector 4',
            price: 89.99,
            description: 'Great for travelling or your small room.',
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
            name: "Sony 4K Smart TV",
            price: 1499.99,
            description: "So smart that it hates apple products.",
            category: "projector",
            image: "https://d13o3tuo14g2wf.cloudfront.net/thumbnails%2Flarge%2FAsset+Hierarchy%2FConsumer+Assets%2FTelevision%2FBRAVIA+LCD+HDTV%2FFY+22%2FX85K%2FProduct+shots%2FX85K_43_50%2FeComm%2F1--X85K-50-Sony-FRNT.png.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTNvM3R1bzE0ZzJ3Zi5jbG91ZGZyb250Lm5ldC90aHVtYm5haWxzJTJGbGFyZ2UlMkZBc3NldCtIaWVyYXJjaHklMkZDb25zdW1lcitBc3NldHMlMkZUZWxldmlzaW9uJTJGQlJBVklBK0xDRCtIRFRWJTJGRlkrMjIlMkZYODVLJTJGUHJvZHVjdCtzaG90cyUyRlg4NUtfNDNfNTAlMkZlQ29tbSUyRjEtLVg4NUstNTAtU29ueS1GUk5ULnBuZy5wbmciLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjIxNDU3NjIwMDB9fX1dfQ__&Signature=FRkIcXAqyhlfrUBOv2~Nc5L51vVM2Orr6pqMPIK9GXRazjJe0hTNC0dGV4fb8O~qbzGdjLRzBWXrjrheNjqSDSXGW83k-PkKY2Kx-VHByl~a6zoLLSNeXzWbMoR2a-Qq-wE70SA-gFJ6XJ8kGb5xhN9ElpTI6pMczf90X~ERKTYnHiZ3lMV5KdYWaiWzWCGdhSk3tSmEZntHkQumbHzRsWju21XjkF5FnMqL3nYM7ztBOARYuCv9EmGsZCZs5elxGIW4GB~6g3dz4cemvaDPBsmJW-ZZNp9FyIcEaW-n6ngekK4DRnWk3DNof39c4DFSbt2T7a-Z4vfRCvdu0AYd4w__&Key-Pair-Id=K37BLT9C6HMMJ0",
            rating: 4.6,
            quantity: 3,
          }),
          
          Product.create({
            name: "LG Ultra Short Throw Projector",
            price: 1299.99,
            description: "Unlock colors you didnt know that existed.",
            category: "projector",
            image: "https://www.projectorcentral.com/images/articles/LG-HU85LA-UST-projector-lifestyle2-800.jpg",
            rating: 4.4,
            quantity: 2,
          }),
          
          Product.create({
            name: "Epson Home Cinema Projector",
            price: 899.99,
            description: "Classic for those who have a home theatre.",
            category: "projector",
            image: "https://mediaserver.goepson.com/ImConvServlet/imconv/22c2d0daa8929f4fc409f96049906c4786534921/515Wx515H?use=productpictures&hybrisId=B2C&assetDescr=PL109W_V11H861020_384x286",
            rating: 4.2,
            quantity: 4,
          }),
          
          Product.create({
            name: "Samsung QLED TV",
            price: 1999.99,
            description: "Usually the first one you see at Costco.",
            category: "projector",
            image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn700bkxxl/gallery/in-qled-qn700b-qa65qn700bkxxl-531282729?$720_576_PNG$",
            rating: 4.7,
            quantity: 1,
          }),
          
        //AUDIO STUFF ---- 
        Product.create({
            name: 'Headcandy Headphones',
            price: 24.99,
            description: 'Better than Skullcandy headphones.',
            category: 'audio',
            image: 'https://skateparkoftampa.com/spot/productimages/colors/2474_26596.jpg',
            rating: 3.5,
            quantity: 1,
        }),
        Product.create({
            name: 'Fiji Apple Headphones',
            price: 469.99,
            description: 'High price for average sound quality.',
            category: 'audio',
            image: 'https://www.apple.com/newsroom/images/product/airpods/standard/apple_airpods-max_pairing_12082020_big.jpg.large.jpg',
            rating: 3.1,
            quantity: 1,
        }),
        Product.create({
            name: 'Ol Reliable',
            price: 4.99,
            description: 'They will last you a few weeks but theyre cost effective.',
            category: 'audio',
            image: 'https://www.jakartanotebook.com/images/products/33/9/368/1/apple-earphones-with-mic-original-15.jpg',
            rating: 5.0,
            quantity: 1,
        }),
        Product.create({
            name: 'Beats by Azgard',
            price: 19.99,
            description: 'Gives you godlike powers.',
            category: 'audio',
            image: 'https://m.media-amazon.com/images/I/61AXL4CBZDL.jpg',
            rating: 2.8,
            quantity: 1,
        }),
        Product.create({
            name: 'Phony Headphones',
            price: 199.99,
            description: 'Best bang for your buck.',
            category: 'audio',
            image: 'https://assets.kogan.com/files/product/2022/HKI-SONY1000XM4BLK/HKI-SONY1000XM4BLK_1.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
            rating: 4.9,
            quantity: 1,
        }),
        Product.create({
            name: 'La Audiphoneua',
            price: 999.99,
            description: 'This is what luxury sounds like.',
            category: 'audio',
            image: 'https://img2.cgtrader.com/items/3789225/2209cf6e6b/large/vintage-sony-walkman-3d-model-2209cf6e6b.jpg',
            rating: 1.1,
            quantity: 1,
        }),
        Product.create({
            name: 'Hope',
            price: 19.45,
            description: 'You could afford it, or you could get a nice sandwich instead',
            category: 'easter egg',
            image: 'https://www.hostesscakes.com/wp-content/uploads/2020/03/HST_TWINK_Hero_Original_Cut.png',
            rating: 1.5,
            quantity: 1
        })
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
