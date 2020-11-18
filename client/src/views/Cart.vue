<template>
<div>
    <Navbar></Navbar>
    <div v-if="carts.length === 0" class="empty-cart mt-5">
        <h3>You don't have any cart!!</h3>
        <img src="https://image.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg" alt="">
    </div>
    <div v-else-if="carts.length > 0" class="container mt-5 mb-5" v-for="cart in carts" :key="cart.id">
        <div class="card text-center">
        <div class="card-header">
            <h1><b>{{ cart.Product.name }}</b></h1>
        </div>
        <div class="card-body">
            <img class="image" :src="cart.Product.image_url" alt="">
            <p class="card-title mt-3">Quantity: {{ cart.quantity }}</p>
            <p class="card-text">Category: {{ cart.Product.category}}</p>
            <p class="card-text">Price: Rp.{{cart.Product.price}}</p>
            <p class="card-text">Stock: {{cart.Product.stock}}</p>
            <!-- <p class="card-text">Status: {{cart.Product.status}} </p> -->
            <a @click.prevent="minus(cart.id, cart.quantity)" href="" class="btn btn-danger">-</a>
            <a @click.prevent="checkout(cart.id, cart.status, cart.ProductId, cart.quantity)" href="" class="btn btn-primary mr-3 ml-3">Checkout</a>
            <a @click.prevent="addQuantity(cart.Product.id, cart.Product.stock)" href="" class="btn btn-success">+</a><br>
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
        minus(id, quantity, ProductId){
            const obj = {
                id, quantity, ProductId
            }
            this.$store.dispatch('minus', obj)
        },
        fetchCart(){
            this.$store.dispatch('fetchCart')
        },
        deleteCart(id){
            this.$store.dispatch('deleteCart', id)
        },
        addQuantity(id, stock){
            const obj = {
                id: id, stock: stock
            }
            this.$store.dispatch('addToCart', obj)
        },
        checkout(id, status, ProductId, quantity){
            const obj = {
                id, status, ProductId, quantity
            }
            this.$store.dispatch('checkout', obj)
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