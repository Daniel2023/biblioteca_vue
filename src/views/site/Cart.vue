<template>
  <Header></Header>
  <div class="container mt-5">
    <!-- Page Heading -->
    <div class="row">
      <div class="col-12">
        <h1 class="page-header">Shopping Cart</h1>
      </div>
    </div>
    <!-- /.row -->

    <!-- Cart Table -->
    <div class="row">
      <div class="col-lg-8 mb-4">
        <form id="cart-update-form" method="post" action="/cart/update">
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th class="mob-hide"></th>
                  <th class="mob-hide">Unit Price</th>
                  <th class="table-qty">Qty</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <h3>Smartphone MTK6572</h3>
                  </td>
                  <td class="text-center mob-hide">
                    <a
                      href="/smartphone-mtk6572"
                      class="trsn"
                      title="Smartphone MTK6572 "
                    >
                      <img
                        src="https://cdnx.jumpseller.com/bootstrap/image/429445/resize/120/150?1439529548"
                        alt="Smartphone MTK6572 "
                        title="Smartphone MTK6572 "
                      />
                    </a>
                  </td>
                  <td class="mob-hide">
                    <span class="order-product-price">$500.000</span>
                  </td>
                  <td>
                    <select
                      class="select select-qty form-control"
                      name="92377362"
                      title="Qty"
                      onchange="$('#cart-update-form').submit();return false;"
                    >
                      <option value="1" selected="selected">1</option>

                      <option value="2">2</option>

                      <option value="3">3</option>

                      <option value="4">4</option>
                    </select>
                  </td>
                  <td>
                    <span class="order-product-subtotal">$500.000</span>
                  </td>
                  <td clas="text-right">
                    <a
                      href="/cart/remove_product/92377362"
                      class="cart-product-remove"
                      title="Remove Product"
                      ><i class="fas fa-times-circle"></i
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <input type="hidden" />
        </form>
      </div>

      <!-- Cart Options -->
      <div class="col-lg-4 mb-4">
        <div class="row">
          <div class="col-sm-12 col-md-12 cart-estimate">
            <div class="card mb-3">
              <div class="card-header">
                <h2 class="card-title">Total</h2>
              </div>
            </div>
          </div>

          <div class="col-12 cart-totals">
            <table class="table table-striped">
              <tbody>
                <tr class="totals">
                  <td colspan="1" class="text-left">Shipping</td>
                  <td colspan="1" class="text-right">$0</td>
                </tr>

                <tr class="totals key">
                  <td colspan="1" class="text-left"><strong>Total</strong></td>
                  <td colspan="1" class="text-right">
                    <strong>$500.000</strong>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="d-flex justify-content-between">
              <a
                href="/"
                class="btn btn-link btn-block"
                title="← Continue Shopping"
                >← Continue Shopping</a
              >
              <a
                href="https://bootstrap.jumpseller.com/checkout?token=7c8ee215a1fe30c18767fbc1a2fa9e59"
                class="btn btn-primary btn-block"
                title="Proceed to Checkout"
                >Buy</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>