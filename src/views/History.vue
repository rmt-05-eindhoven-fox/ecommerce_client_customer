<template>
  <section id="history-page">
    <Navbar/>
    <div class="container mt-5">
      <h2 class="text-left">
        Transaction History
      </h2>
      <div>
        <table class="table">
          <thead>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Date Transaction</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Arsenal Jersey 2020/2021</td>
              <td>x 2</td>
              <td>1.900.000</td>
              <td>13-12-2020</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Arsenal Jersey 2020/2021</td>
              <td>x 2</td>
              <td>1.900.000</td>
              <td>13-12-2020</td>
            </tr>
          </tbody>
        </table>
        <hr>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'History',
  components: {
    Navbar
  }
}
</script>

<style scoped>
#history{
  width: 70vh;
}
</style>>
