<template>
  <div id="PromoStore">
    <div class="promo-store">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mt-3">
            <h1>
              <span>Get</span> your <span>products</span> at the <br />
              <span>Best Price</span>
            </h1>
          </div>
          <div class="col-lg-6 text-right mt-4">
            <br />
            <h1><span>Promo</span> hari ini</h1>
          </div>
        </div>
        <div class="card-promo">
          <carousel class="row" :items="3" :nav="false">
            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  style="width: 100%"
                  src="../assets/terlaris1.png"
                  class="card-img-top"
                  alt=""
                />
                <div class="card-body text-center">
                  <h5 class="card-title text-center">
                    <span>Nike Blazer</span><br /><span>IDR </span>500.000
                  </h5>
                  <p class="card-text"></p>
                  <router-link to="/product-details"
                    ><div type="button" class="btn btn-success mb-2">
                      Lihat Barang
                    </div></router-link
                  >
                </div>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: {
    carousel,
  },
};
</script>

<style>
</style>