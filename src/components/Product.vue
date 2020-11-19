<template>
     <div class="col-md-3 product-men women_two shop-gd">
        <div class="product-googles-info googles">
            <div class="men-pro-item">
            <div class="men-thumb-item">
                <img :src="product.image_url" class="img-fluid" alt="">
                <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                    <router-link to="`/detail/${product.id}`"> <a @click.prevent="showProduct" href="#" class="link-product-add-cart">Quick View</a></router-link>
                </div>
                </div>
                <span class="product-new-top">New</span>
            </div>
            <div class="item-info-product">
                <div class="info-product-price">
                <div class="grid_meta">
                    <div class="product_price">
                    <h4>
                        <a href="single.html">{{ product.name }} </a>
                    </h4>
                    <h3> Available: {{ product.stock }} </h3>
                    <div class="grid-price mt-2">
                        <span class="money ">{{ product.price }}</span>
                    </div>
                    </div>
                </div>
                <div class="googles single-item hvr-outline-out">
                    <button @click.prevent="addCart" type="submit" class="googles-cart pgoogles-cart" >
                        <i class="fa fa-cart-plus"></i>
                    </button>
                    <button type="submit" data-toggle="modal" data-target="#modal_aside_right" class="googles-cart pgoogles-cart" >
                        <i class="fa fa-cart-plus"></i>
                    </button>
                         <div id="modal_aside_right" class="modal fixed-right fade" tabindex="-1" role="dialog">
                            <div class="modal-dialog modal-dialog-aside" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Check Out</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <CheckoutModal
                                        v-for="cart in carts"
                                        :key="cart.id"
                                        :cart="cart">
                                    </CheckoutModal>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div> 
                        </div> 
                </div>
                </div>
                <div class="clearfix"></div>
            </div>
            </div>
        </div>
        </div>
</template>

<script>
import CheckoutModal from '../components/CheckoutModal'
export default {
    name: "Products",
    props: ['product'],
    components: {
        CheckoutModal
    },
    methods: {
        fetchCarts () {
            this.$store.dispatch('fetchCarts')
        },
        addCart () {
            const id = this.product.id
            this.$store.dispatch('addCart', id)
            // this.$store.dispatch('addCart', payload)
            // this.$store.dispatch('fetchCarts')
        }
    },
    created () {
        this.fetchCarts()
    },
    computed: { 
        carts () {
        return this.$store.state.carts
    }
  }
}
</script>

<style>

</style>