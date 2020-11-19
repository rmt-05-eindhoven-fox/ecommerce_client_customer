<template>
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
                <img src="https://i.ibb.co/pLfzWvQ/d.png" class="img-fluid" alt="">
                <div class="color-quality">
                    <div class="color-quality-right">
                    <h5>Quantity :</h5>
                    </div>
                    <div class="quantity">
                    <div class="quantity-select">
                        <div class="entry value-minus">&nbsp;</div>
                        <div class="entry value">
                        <span>1</span>
                        </div>
                        <div class="entry value-plus active">&nbsp;</div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div> <!-- modal-bialog .// -->
        </div> <!-- modal.// -->
</template>

<script>
export default {
    name: "Modal"

}
</script>

<style>

</style>