<script setup lang="ts">
import {getProducts,  type Product } from '../model/products'
import { ref } from 'vue'
import { addToCart } from '../model/Cart'


const products = ref<Product[]>([]);
 getProducts().then((data) => {
     products.value = data;
 });

</script>


<template>
    <div>
        <h1 class="title">Products

        </h1>

        <h2 class="subtitle">All products
            
        </h2>

        <div class="product-list">
            <progress v-if="!products.length" class="progress is-small is-primary" max="100">15%</progress>
            
            <div class="product" v-for="product in products" :key="product.id">
                <div class="product-image">
                    <img :src="product.thumbnail" alt="product.title">
                </div>
                <div class="product-info">
                    <h3 class="product-name">{{product.title}}</h3>
                    <p class="product-description">{{product.description}}</p>
                    <p class="product-price">${{product.price}}</p>
                </div>
                <div class="button is primary" @click="addToCart(product)"> Buy</div>
            </div>

        </div>



    </div>
</template>



<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 -1rem;
    background-color: aliceblue;
}

.product {
    width: 20%;
    padding: 1rem;
    margin: 1rem;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

.price {
    color: #4a4a4a;
    font-size: 1.2rem;
    font-weight: 600;
}

</style>