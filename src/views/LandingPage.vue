<template>
    <div class="LandingPage">
        <!-- <header-store /> -->
        <header-store></header-store>
        <!-- <h1>Ini Halaman Landing Page</h1> -->
        <!-- <banner-store /> -->
        <banner-store></banner-store>
        <kategori-pilihan></kategori-pilihan>
        <best-seller></best-seller>
        <promo-store></promo-store>
        <iklan-store></iklan-store>
        <footer-store></footer-store>
    </div>
</template>

<script>
    import HeaderStore from '@/components/HeaderStore.vue'
    import BannerStore from '@/components/BannerStore.vue'
    import KategoriPilihan from '@/components/KategoriPilihan.vue'
    import BestSeller from '@/components/BestSeller.vue'
    import PromoStore from '@/components/PromoStore.vue'
    import IklanStore from '@/components/IklanStore.vue'
    import FooterStore from '@/components/FooterStore.vue'



export default {
    name : 'LandingPage',
    components : {
        HeaderStore,
        BannerStore,
        KategoriPilihan,
        BestSeller,
        PromoStore,
        IklanStore,
        FooterStore
        
    }
}
        
</script>

<style>

</style>