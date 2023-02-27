<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="" style="height: 100vh">
    <div class="row h-100 text-light">
      <div class="col" style="background-color: #272727">logo</div>
      <div class="col">
        <div class="row h-100">
          <div class="col"></div>
          <div class="col d-flex justify-content-center align-items-center" style="width: 537px">
            <div class="text-center w-100">
              <div class="mb-5"><h1>sign in</h1></div>
              <div>
                <div class="mb-5">
                  <input type="text" class="rounded-pill border-0" placeholder="Username" />
                </div>
              </div>
              <div>
                <div class="mb-5">
                  <input type="email" class="rounded-pill border-0" placeholder="Email" />
                </div>
              </div>
              <div>
                <div class="mb-5">
                  <input type="password" class="rounded-pill border-0" placeholder="Password" />
                </div>
              </div>
              <div
                class="row mb-5 btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div class="col">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                  />
                  <div class="d-flex align-items-center justify-content-center btn btn-dark rounded-pill sex">
                    <label for="btnradio1">male</label>
                  </div>
                </div>
                <div class="col">
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                  />
                  <div class="d-flex align-items-center justify-content-center btn btn-dark rounded-pill sex">
                    <label for="btnradio2">female</label>
                  </div>
                </div>
              </div>
              <div class="mb-5">
                <button class="btn btn-light rounded-pill" style="height: 50px; width: 150px">
                  sign in
                </button>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <div class="mb-3">
              <RouterLink to="login" class="text-decoration-none text-light"
                >have accout?</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  background-color: #272727;
  color: white;
  height: 50px;
  width: 250px;
  text-align: center;
}

input::placeholder {
  color: white;
  text-align: center;
}

.sex {
  height: 50px;
  width: 110px;
  background-color: #272727;
  color: white;
  text-align: center;
  text-justify: center;
}
</style>
