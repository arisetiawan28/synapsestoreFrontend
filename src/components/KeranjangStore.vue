<template>
  <div id="KeranjangStore">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="table">
            <table width="100%">
              <tr>
                <th>Gambar</th>
                <th>Nama Barang</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>
                  <a href=""
                    ><img
                      src="../assets/headset.png"
                      alt=""
                      width="186px"
                      height="183px"
                  /></a>
                </td>
                <td>
                  <strong>Adidas Jogger Nite 3M</strong><br /><br /><strong
                    >IDR</strong
                  >
                  1.998.999
                </td>
                <td>
                  <a href=""
                    ><img
                      src="../assets/delete.png"
                      width="42px"
                      height="42px"
                      alt=""
                  /></a>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="list-total">
            <h1>ID Transaksi<span>#SH12000</span></h1>
            <hr />
            <h1>
              Subtotal<span><strong>IDR</strong> 1.998.999</span>
            </h1>
            <hr />
            <h1>Kurir<span>Pilih Kurir</span></h1>
            <hr />
            <h1>
              Ongkos Kirim<span><strong>IDR</strong> 160.000</span>
            </h1>
            <hr />
            <h1>Bank Transfer<span>Pilih Bank</span></h1>
            <hr />
            <h1>No. Rekening<span>0102 1029 3841</span></h1>
            <hr />
            <h1>
              Total Belanja<span><strong>IDR</strong> 2.159.800</span>
            </h1>
            <hr />
          </div>
          <router-link to="/success"><div type="button" class="btn btn-primary form-control my-3">
            Pesan Sekarang
          </div></router-link>
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