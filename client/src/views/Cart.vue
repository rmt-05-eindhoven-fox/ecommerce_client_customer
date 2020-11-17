<template>
<div>
    <Navbar></Navbar>
    <div class="container mt-5 mb-5" v-for="cart in carts" :key="cart.id">
        <div class="card text-center">
        <div class="card-header">
            {{ cart.Product.name }}
        </div>
        <div class="card-body">
            <img class="image" :src="cart.Product.image_url" alt="">
            <p class="card-title mt-3">Quantity: {{ cart.quantity }}</p>
            <p class="card-text">Category: {{ cart.Product.category}}</p>
            <p class="card-text">Price: Rp.{{cart.Product.price}}</p>
            <p class="card-text">Status: </p>
            <a href="" class="btn btn-danger">-</a>
            <a href="" class="btn btn-primary mr-3 ml-3">Checkout</a>
            <a href="" class="btn btn-success">+</a><br>
            <a @click.prevent="deleteCart(cart.id)" href="" class="btn btn-warning mt-2">Delete</a>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Cart',
    components: {
        Navbar
    },
    created () {
        this.fetchCart()
    },
    methods: {
        fetchCart(){
            this.$store.dispatch('fetchCart')
        },
        deleteCart(id){
            this.$store.dispatch('deleteCart', id)
        }
    },
    computed: {
        carts(){
            return this.$store.state.carts
        }
    }
}
</script>

<style>
.image {
    width: 30%;
    max-height: 30%, !important;
}
</style>