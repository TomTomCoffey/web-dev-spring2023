//const data = require('../data/products.json');
const{connect, ObjectId }= require('./mongo');

const COLLECTION_NAME = 'users';

async function collection(){
    const db = await connect();
    return db.collection(COLLECTION_NAME);
}



function getAll() {
  return data.products;
}

async function ById(id) {
    const col = await collection();
    const product = await col.findOne({_id: new ObjectId(id)});
    return product;

    return data.products.find(product => product.id === id);
}

function add(item) {
    product.id = data.products.length + 1;
    data.products.push(product);
}

function update(item) {
    const index = data.products.findIndex(p => p.id === product.id);
    data.products[index] = product;
}

function deleteItem(id) {
    const index = data.products.findIndex(p => p.id === id);
    data.products.splice(index, 1);
}

function search(searchTerm, ) {
    return data.products.filter(product => {
        return  product.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())  ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = {
    getAll,
    ById,
    add,
    update,
    deleteItem,
    search

};