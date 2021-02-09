<template>
  <div id="product-details">
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-4">
          <div class="picture">
            <img src="../assets/headset.png" alt="" width="100%" />
          </div>
          <carousel class="row mt-3" :items="3" :nav="false">
            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover1.png" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover2.png" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover3.png" alt="" />
              </div>
            </div>

            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover1.png" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover2.png" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="pict-thumb">
                <img src="../assets/cover3.png" alt="" />
              </div>
            </div>
          </carousel>
        </div>

        <div class="col-lg-8 pl-5">
          <h1>Adidas Jogger Nite 3M</h1>
          <hr />
          <h1>IDR <span>1.998.999</span></h1>
          <button type="button" class="btn btn-light" v-on:click="count--"><img style="width: 25px" src="../assets/min.png" alt="" /></button>
          <b class="p-2" style="font-size:25px;">{{ count }}</b>
          <button type="button" class="btn btn-light" v-on:click="count++"><img style="width: 25px" src="../assets/plus.png" alt="" /></button>
          <div class="card my-4" style="width: 100%">
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, error officia. Rem aperiam laborum voluptatum vel,
                pariatur modi hic provident eum iure natus quos non a sequi, id
                accusantium! Autem.
              </p>
            </div>
          </div>
          <router-link to="/keranjang"
            ><div type="button" class="btn btn-warning text-white">
              Tambahkan ke keranjang <i class="fas fa-shopping-cart"></i></div
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: "ProductDetails",
  components :{
    carousel
  },
  data (){
    return{
      count:0,
    }
  }
};
</script>

<style>
</style>