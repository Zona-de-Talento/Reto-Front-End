const { faker } = require('@faker-js/faker');

let database = { productos: [] }

for(let i = 1; i < 11; i++) {
    database.productos.push({
        id: i,
        nombre: faker.commerce.productName(),
        descripcion: faker.lorem.text(),
        price: faker.commerce.price(),
        cantidad: faker.random.numeric(),
        urlImg: faker.image.abstract()
    });
}
console.log(JSON.stringify(database));