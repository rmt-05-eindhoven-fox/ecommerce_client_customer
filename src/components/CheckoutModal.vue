<template>
<div class="mb-5">
 <img :src="cart.Product.image_url" class="img-fluid" alt="">
    <div class="color-quality">
        <div class="color-quality-right">
        <h5>Quantity :</h5>
        </div>
        <div class="quantity">
            <div class="quantity-select">
                <div @click.prevent="minus" class="entry value-minus">&nbsp;</div>
                <input class="entry value" :value="cart.quantity">
                <!-- <span>{{cart.quantity}}</span> -->
               
                <div @click.prevent="plus" class="entry value-plus active">&nbsp;</div>
            </div>
        </div>
        <button @click.prevent="deleteCart" class="btn btn-primary mt-3">DELETE</button>
    </div>
</div>
</template>

<script>
export default {
    name: 'CheckoutModal',
    props: ['cart'],
    methods: {
        deleteCart () {
            const id = this.cart.ProductId
            this.$store.dispatch('deleteCart', id)
            this.fetchCart()
        },
        plus () {
            const payload = {
                id: this.cart.ProductId,
                quantity: this.cart.quantity + 1
            }
            this.$store.dispatch('updateCart', payload)
            this.fetchCart()
        },
        minus () {
            const payload = {
                id: this.cart.ProductId,
                quantity: this.cart.quantity - 1
            }
            this.$store.dispatch('updateCart', payload)
            this.fetchCart()
        },
        fetchCart () {
            this.$store.dispatch('fetchCarts')
        },
    },
    created () {
        // this.stock = this.cart.quantity
        this.fetchCart()
    }
}
</script>

<style>

</style>