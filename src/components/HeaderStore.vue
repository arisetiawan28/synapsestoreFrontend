<template>
  <div id="HeaderStore">
    <!-- navbar -->
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-bg-white">
        <a class="navbar-brand" href="#"><img src="../assets/logosyn.png" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="col-lg-6">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Belanjo apo hari ini..."
              aria-label="Search"
            />
          </div>
          <div class="col-lg-1">
            <img width="28px" src="../assets/favorit.png" />
          </div>
          <div class="col-lg-1">
            <img width="28px" src="../assets/keranjang.png" />
          </div>
          <div class="col-lg-2">
            <router-link to="/register"
              ><a href="" class="btn btn-outline-success form-control"
                >Register</a
              ></router-link
            >
          </div>
          <div class="col-lg-2">
            <a
              href=""
              class="btn btn-success form-control"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              >Login</a
            >
            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Login
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
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
                        <label for="password" class="form-label"
                          >Password</label
                        >
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
                    <div class="card-footer text-muted">
                      <div class="ready text-center">
                        <div id="Help" class="form-text">
                          Belum punya akun?
                          <router-link to="/register" data-dismiss="modal"
                            ><a href=""
                              ><button type="button" class="btn btn-link">
                                Daftar sekarang
                              </button></a
                            ></router-link
                          >
                        </div>
                      </div>
                      <!-- <div class="submit text-center mb-2">
                        <button type="submit" class="btn btn-success">
                          Login
                        </button>
                      </div> -->
                    </div>
                  </div>
                  <div class="modal-footer text-center">
                    <!-- <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button> -->
                    <button type="button" class="btn btn-success">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- akhir navbar -->
  </div>
</template>

<script>
export default {
  name: "HeaderStore",
};
</script>

<style>
</style>