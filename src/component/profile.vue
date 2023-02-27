<template>
  <div class="container">
    <div class="container mt-5 btnclick">
      <div class="d-flex position-relative  align-items-center h-100 ms-5">
        <div class="card d-flex align-items-center justify-content-center"
          style="background-color: #121212;width:150px; height:150px; border-radius: 25px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor"
            class="bi bi-person text-light" viewBox="0 0 16 16">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>
        </div>
        <div class=" ms-5">
          <h2 class="text-light"> USERNAME ( age ) </h2>
          <h6 style="color:#898989;">sex</h6>
          <h6 style="color:#898989;">weight , height</h6>
        </div>
        <div class="position-absolute top-0 end-0">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-pencil text-light me-3 mt-3" viewBox="0 0 16 16">
              <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg></a>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row gap-4">
        <div class="col-4 d-flex justify-content-center align-items-center text-light"
          style="height: 30rem; background-color:#1E1E1E;border-radius: 25px;">
          <div> body type</div>
        </div>
        <div class="col h-100 d-flex justify-content-center  text-light">
          <div class="container btnclick">
            <div class="d-flex align-items-center h-100 ms-5">
              <div class="card d-flex align-items-center justify-content-center"
                style="background-color: #121212;width:80px; height:80px; border-radius: 25px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                  class="bi bi-person text-light" viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </div>
              <div class=" ms-5">
                <form class="form-floating">
                  <input type="text" class="form-control rounded-pill border-0 input_EPU" id="post" placeholder="post">
                  <label class="ps-4" for="post">what happend ?</label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btnclick {
  background-color: #1E1E1E;
  height: 200px;
  border-radius: 25px;
  transition: 0.5s;
}

input {
  background-color: #272727;
  color: white;
  height: 50px;
  width: 35rem;
  text-align: center;
}

input:focus {
  background-color: #272727;
  color: white;
  text-align: center;
}

input::placeholder {
  color: white;
  text-align: center;
}
</style>