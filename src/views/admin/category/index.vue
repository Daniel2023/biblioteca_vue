<template>
  <Layout>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Books Inventory</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Book Title</th>
                      <th>Author</th>
                      <th>Category</th>
                      <th>Register Date</th>
                      <th>ISBN</th>
                      <th>Stock</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trident</td>
                      <td>Internet Explorer 4.0</td>
                      <td>Win 95+</td>
                      <td>4</td>
                      <td>X</td>
                      <td>testes</td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet Explorer 5.0</td>
                      <td>Win 95+</td>
                      <td>5</td>
                      <td>C</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet Explorer 5.5</td>
                      <td>Win 95+</td>
                      <td>5.5</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet Explorer 6</td>
                      <td>Win 98+</td>
                      <td>6</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>Internet Explorer 7</td>
                      <td>Win XP SP2+</td>
                      <td>7</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Trident</td>
                      <td>AOL browser (AOL desktop)</td>
                      <td>Win XP</td>
                      <td>6</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>Firefox 1.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.7</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>Firefox 1.5</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>Firefox 2.0</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>Firefox 3.0</td>
                      <td>Win 2k+ / OSX.3+</td>
                      <td>1.9</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                    <tr>
                      <td>Gecko</td>
                      <td>Netscape Navigator 9</td>
                      <td>Win 98+ / OSX.2+</td>
                      <td>1.8</td>
                      <td>A</td>
                      <td>123</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
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