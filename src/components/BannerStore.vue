<template>
  <div id="BannerStore">
    <!-- <h1>Banner</h1> -->
    <!-- banner -->
    <br>
    <carousel class="container" :items="1" :autoplay="true" :nav="false">
      <div class="bg-banner">
        <div class="row">
          <div class="col-lg-5 p-auto kolom-kiri">
            <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
            <router-link to="/product-details"><div type="button" class="btn btn-outline-light mt-2">
              Lihat Barang <i class="fas fa-arrow-right"></i>
            </div></router-link>
          </div>
          <div class="col-lg-7">
            <img width="100%" height="auto" src="../assets/camera.png" />
          </div>
        </div>
      </div>
      <div class="bg-banner">
        <div class="row">
          <div class="col-lg-5 p-auto kolom-kiri">
            <h1><span>Get</span> the <span>best product</span> <br> at <span>your home</span></h1>
            <router-link to="/product-details"><div type="button" class="btn btn-outline-light mt-2">
              Lihat Barang <i class="fas fa-arrow-right"></i>
            </div></router-link>
          </div>
          <div class="col-lg-7">
            <img width="100%" height="auto" src="../assets/camera.png" />
          </div>
        </div>
      </div>
    </carousel>
    <!-- akhir banner -->
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  name: "BannerStore",
  components :{
    carousel
  }
};
</script>

<style scoped>
</style>