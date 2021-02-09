<template>
  <div id="login-store">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="card text-center mt-5">
            <div class="card-header"><h3><strong>Login</strong></h3></div>
            <div class="card-body">
              <form width="100%">
                <div class="mb-3 text-left">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Masukkan email"
                    id="email"
                  />
                </div>
                <div class="mb-3 text-left">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Masukkan password"
                    id="password"
                  />
                </div>
                <div class="mb-2 form-check text-left">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Saya menyetujui persyaratan</label
                  >
                </div>
              </form>
            </div>
            <div class="card-footer text-muted">
                <div class="ready text-center">
                  <div id="Help" class="form-text">
                    Belum punya akun?
                    <router-link to="/register"><a href=""
                      ><button type="button" class="btn btn-link">
                        Daftar sekarang
                      </button></a
                    ></router-link>
                  </div>
                </div>
                <div class="submit text-center mb-2">
                  <button type="submit" class="btn btn-success">
                    Login
                  </button>
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