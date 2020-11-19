<template>
       <div class="row align-items-center mb-3">
        <div class="col-12 col-sm-12 col-md-2 text-center">
            <img
             class="img-responsive"
             alt="prewiew"
             style="height: 60%; width: 60%"
             :src="product.Product.image_url"
            />
        </div>
        <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
            <h4 class="product-name"><strong>{{product.Product.name}}</strong></h4>
        </div>
        <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
            <div class="col-6 col-sm-6 col-md-6 text-md-right " style="padding-top: 5px">
                <h6><strong>{{product.Product.price}} <span class="text-muted">x</span></strong></h6>
            </div>
            <div class="col-4 col-sm-4 col-md-4">
                <div class="quantity">
                    <input  @click.prevent="patchQuantity(product.quantity + 1, product.id)"
                            type="button" value="+" class="plus"/>
                    <input
                            :value="product.quantity"
                            :disabled="true"
                            type="number" step="1" max="10" min="1" title="Qty"
                            class="qty"
                            size="4"/>
                    <input
                            @click.prevent="patchQuantity(product.quantity - 1, product.id)"
                            type="button" value="-" class="minus"/>
                </div>
            </div>
            <div class="col-2 col-sm-2 col-md-2 text-right">
                <button @click.prevent="deleteCast(product.id)"
                        type="button" class="btn btn-outline-danger btn-xs">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'CartItem',
  props: ['product'],
  methods: {
    patchQuantity (data, id) {
      const payload = {
        quantity: data,
        id
      }
      console.log(payload, '<<<< payload cartItem')
      this.$store.dispatch('patchQuantity', payload)
    },
    deleteCast (id) {
      this.$store.dispatch('deleteCast', id)
    }
  }
}
</script>
