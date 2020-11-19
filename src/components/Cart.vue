<template>
    <div class="container">
        <div class="row mt-5 pt-2">
            <div class="col-2" style="border-right-width: 1px; border-right-style: solid;">
                <div class="card w-100 mt-3 mb-4 mr-3">
                    <div class="card-body" style="position: relative;">
                        <i role="button" class="fa fa-times" style="position:absolute; top:10px"></i>
                        <div class="row">
                            <div class="col-4 w-100">
                                <img src="">
                            </div>
                            <div class="col-8 text-dark dark-left">
                                <div class="card-title pb-4">
                                    <h3>Jamie Dornan</h3>
                                </div>
                                <div class="card-footer d-flex justify-content-lg-between">
                                    <div>
                                        <span class="badge badge-info mr-3"> Rp. 10,000</span>
                                    </div>
                                </div>
                                <div>
                                    <i role="button" class="fa fa-plus"></i>
                                    <i role="button" class="fa fa-minus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4 text-left">
           <div class="mt-2 mb-2">
               <h2>Your Cart</h2>
               </div>
            <div class="mt-2 mb-5">
                <div>
                    <h4>Price</h4>
                </div>
            </div>
            <div class="mt-2 mb-2">
                <h4>Total</h4>
            </div>
            <div class="container mt-2">
                <button class="btn btn-danger">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>
