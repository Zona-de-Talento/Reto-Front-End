const { faker } = require('@faker-js/faker');

let database = { productos: [] }

for(let i = 1; i < 100; i++) {
    database.productos.push({
        id: i,
        nombre: faker.commerce.productName(),
        descripcion: faker.lorem.sentences(2),
        price: faker.commerce.price(),
        cantidad: faker.random.numeric(),
        urlImg: `https://picsum.photos/id/${i}/400/300`
    });
}
console.log(JSON.stringify(database));