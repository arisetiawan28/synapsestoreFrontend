<template>
  <div class="ProductDetails">
    <header-store></header-store>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/"><a href="#"><i class="fas fa-home"></i> Home</a></router-link></li>
          <li class="breadcrumb-item active" aria-current="page">
            Product Details
          </li>
        </ol>
        <hr>
      </nav>
    </div>
    <detail-store></detail-store>
    <div class="my-5"><promo-store></promo-store></div>
    <footer-store></footer-store>
  </div>
</template>

<script>
    import HeaderStore from "@/components/HeaderStore.vue";
    import DetailStore from "@/components/DetailStore.vue";
    import PromoStore from "@/components/PromoStore.vue";
    import FooterStore from "@/components/FooterStore.vue";

export default {
  name: "ProductDetailsPage",
  components: {
    HeaderStore,
    DetailStore,
    PromoStore,
    FooterStore,
  },
};
</script>

<style>
</style>