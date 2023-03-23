const data = require('../data/products.json');

function getProducts() {

    return data.products;
    
}
function getProductbyId(id) {
    product.id = data.products.length + 1;
    return data.products.find(product => product.id == id);
    
}

function addProduct(product) {
    data.products.push(product);
}

function upDateProduct(id, product) {
    const index = data.products.findIndex(product => product.id == id);
    data.products[index] = product;
}
function deleteProduct(id) {
    const index = data.products.findIndex(product => product.id == id);
    data.products.splice(index, 1);
}

function searchProducts(searchTerm) {
    return data.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toLowerCase().includes(searchTerm.toLowerCase());




}


module.exports = {
    getProducts,
    getProductbyId,
    addProduct,
    upDateProduct,
    deleteProduct,

}