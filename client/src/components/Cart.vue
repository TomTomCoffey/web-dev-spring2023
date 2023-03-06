<script setup lang="ts">
import { useCart} from '../model/cart';

const cart = useCart();

</script>

<template>
    <div>
        <div class="cart">
            <h2>Cart</h2>
            <p> {{ cart.length }}</p>
            <div class="cart-item">
                <img :src="item.product.thumbnail" alt="item.product.title">
                <p>{{ item.product.title }}</p>
                <p>{{ item.quantity }}</p>
                <p>{{ item.product.price }}</p>


            </div>
        </div>

    </div>
</template>



<style scoped>

.cart {
  display: flex;
  margin: 5px;
  align-items: center;
}

</style>