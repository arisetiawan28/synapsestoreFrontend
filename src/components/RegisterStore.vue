<template>
  <div id="register-store">
    <div class="container">
      <div class="header mt-3 mb-3">
        <div class="row text-center">
          <div class="col">
            <h1><strong>Daftar Sekarang</strong></h1>
            <hr />
          </div>
        </div>

        <div class="register mx-5">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card mb-3 px-3">
                <form width="100%">
                  <div class="mb-3 mt-4">
                    <label for="name" class="form-label">Nama</label>
                    <input
                      type="name"
                      class="form-control"
                      placeholder="Masukkan nama"
                      id="name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Masukkan email"
                      id="email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Masukkan password"
                      id="password"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="loop-password" class="form-label"
                      >Ulangi Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Masukkan ulang password"
                      id="loop-password"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >Saya menyetujui persyaratan</label
                    >
                  </div>
                  <div class="ready text-center">
                    <div id="Help" class="form-text">
                      Sudah punya akun?
                      <router-link to="/login"><a href=""
                        ><button type="button" class="btn btn-link">
                          Login
                        </button></a
                      ></router-link>
                    </div>
                  </div>
                  <div class="submit text-center mb-3">
                    <button type="submit" class="btn btn-success">
                      Daftar Sekarang
                    </button>
                  </div>
                </form>
              </div>
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