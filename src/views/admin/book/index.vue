<template>
  <Layout>
    <section class="content">
      <div id="registration" class="row">
        <div class="col-md-full">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Product Registration</h3>

              <div class="card-tools">
                <button
                  type="button"
                  class="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                ></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group my-3">
                <label for="inputName">Book Title</label>
                <input type="text" id="inputName" class="form-control" />
              </div>
              <div class="form-group my-3">
                <label for="inputName">Author</label>
                <input type="text" id="inputName" class="form-control" />
              </div>
              <div class="form-group my-3">
                <label for="inputDescription">Synopsis</label>
                <textarea
                  id="inputDescription"
                  class="form-control"
                  rows="6"
                ></textarea>
              </div>
              <div class="form-group my-3">
                <label for="inputCategory">Category</label>
                <select id="inputCategory" class="form-control custom-select">
                  <option selected disabled>Select one</option>
                  <option>Best Sellers</option>
                  <option>Classics</option>
                  <option>Horror</option>
                  <option>Learning & Education</option>
                  <option>Comics</option>
                  <option>Religion & Spirituality</option>
                  <option>Romances</option>
                  <option>Fiction</option>
                </select>
              </div>
              <div class="form-group my-3">
                <label for="inputClientCompany">Product Pictures</label>
                <input
                  type="file"
                  id="inputClientCompany"
                  class="form-control"
                />
              </div>
              <div class="form-group my-3">
                <label for="inputPrice">Price</label>
                <input type="text" id="inputPrice" class="form-control" />
              </div>
              <div class="form-group my-3">
                <label for="inputName">ISBN</label>
                <input type="text" id="inputName" class="form-control" />
              </div>
              <div class="">
                <div class="col-12">
                  <a href="#" class="btn btn-secondary">Cancel</a>
                  <input
                    type="submit"
                    value="Add Product"
                    class="btn btn-success float-right"
                  />
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "../layout";

export default {
  components: {
    Layout,
  },
};
</script>
