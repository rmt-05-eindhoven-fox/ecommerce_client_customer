<template>
<div class="mb-5">
 <img :src="cart.Product.image_url" class="img-fluid" alt="">
    <div class="color-quality">
        <div class="color-quality-right">
        <h5>Quantity :</h5>
        </div>
        <div class="quantity">
        <div class="quantity-select">
            <div class="entry value-minus">&nbsp;</div>
            <div class="entry value">
            <span>{{cart.quantity}}</span>
            </div>
            <div class="entry value-plus active">&nbsp;</div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CheckoutModal',
    props: ['cart']
}
</script>

<style>

</style>