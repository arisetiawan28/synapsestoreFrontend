<template>
  <div class="ShoppingCart">
    <header-store></header-store>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item"><router-link to="/product-details"><a href="#"><i class="fas fa-tasks"></i> Detail</a></router-link></li>
          <li class="breadcrumb-item active" aria-current="page">
            Keranjang
          </li>
        </ol>
        <hr>
      </nav>
    </div>

    <keranjang-store></keranjang-store>
  </div>
</template>

<script>
    import HeaderStore from "@/components/HeaderStore.vue";
    import KeranjangStore from "@/components/KeranjangStore.vue";


export default {
    name: "KeranjangPage",
    components: {
        HeaderStore,
        KeranjangStore
    }

}
</script>

<style>

</style>