<template>
  <div id="IklanStore">
    <div class="container-fluid">
      <div class="bg-iklan">
        <div class="row mt-5">
          <div class="col-lg-4">
            <img width="100%" height="auto" src="../assets/person-1.png" />
          </div>
          <div class="col-lg-8 py-5 px-5">
            <div class="desc">
              <h1>Nike Dirancang untuk membantu<br />mengurangi cedera</h1>
              <h5>
                sepatu terbaik untuk membantu Anda tetap berkatifitas. Karena hanya ada satu hal yang lebih buruk
                daripada cedera - tidak berlari lagi
              </h5>

              <router-link to="/product-details"><div type="button" class="btn btn-outline-light mt-2">
                Lihat Barang <i class="fas fa-arrow-right"></i>
              </div></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>