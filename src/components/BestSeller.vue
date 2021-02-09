<template>
  <div id="BestSeller">
    <div class="best-seller">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <!-- <br /> -->
            <h1>
              <span>Premium</span> Products for <br />
              <span>Every Need</span>
            </h1>
          </div>
          <div class="col-lg-6 text-right mt-2">
            <br />
            <h1>Barang <span>Terlaris</span></h1>
          </div>
        </div>
        <!-- desktop -->
        <div class="card-best d-none d-lg-block">
        <carousel class="row mt-2" :items="5" :nav="false">
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>{{ nameProduct }}</span>
                </h5>
                <p class="card-text text-center"><strong>IDR</strong> {{ hargaProduct }}</p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
        </carousel>
      </div>
      <!-- akhir desktop -->

      <!-- mobile -->
      <div class="card-best d-lg-none d-block">
        <carousel class="row mt-2" :items="2" :nav="false">
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card" style="width:12rem">
              <img style="width:100%" src="../assets/terlaris1.png" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title text-center">
                  <span>Nike Blazer</span><br /><span>IDR </span>500.000
                </h5>
                <p class="card-text"></p>
                <center>
                <router-link to="/product-details"><div type="button" class="btn btn-success mb-2">
                  Lihat Barang
                </div></router-link>
              </center>
              </div>
            </div>
          </div>
        </carousel>
      </div>
      <!-- akhir mobile -->
    </div>
  </div>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  name: "BestSeller",
  components :{
    carousel
  },
  data (){
    return{
      nameProduct : 'Adidas Running',
      hargaProduct : '400.000'
    }
  }
};
</script>

<style>
</style>