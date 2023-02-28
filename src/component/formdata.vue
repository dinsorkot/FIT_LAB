<script setup></script>

<template>
  <div class="container text-white">
    <div class="py-3">
      <h3>Calculate BMI</h3>
    </div>
    <div class="container">
      <div class="form-group">
        <label for="ControlSelect">Please select the number of exercises </label>
        <select class="form-control" id="ControlSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div class="summit mt-2">
        <button type="button" class="btn btn-secondary">SUMMIT</button>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-4 d-flex justify-content-center">
            <div
              class="card d-flex justify-content-center"
              style="width: 20rem; height: 13rem"
            >
              <div class="d-flex justify-content-center">
                <div>
                  <div><input type="date" /></div>
                  <div>
                    <select name="" id="">
                      <option selected>sdasdasdasdas</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                  </div>
                  <div><input type="number" name="" id="" placeholder="Hour" /></div>
                  <div><input type="number" name="" id="" placeholder="minute" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
