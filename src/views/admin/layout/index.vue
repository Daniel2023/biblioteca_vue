<template>
  <link
    rel="stylesheet"
    href="https://adminlte.io/themes/v3/dist/css/adminlte.min.css"
  />

  <div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/admin" class="brand-link">
        <img
          src="/img/book.png"
          alt="AdminLTE Logo"
          class="brand-image elevation-3 mr-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">Books Shop</span>
      </router-link>
      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="info">
            <a href="#" class="d-block">Management</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item">
              <router-link to="/admin" class="nav-link">
                <i class="nav-icon fas fa-laptop-house"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/category" class="nav-link">
                <i class="nav-icon fas fa-dolly-flatbed"></i>
                <p>Inventory</p>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link to="/admin/book" class="nav-link">
                <i class="nav-icon fas fa-plus-circle"></i>
                <p>Product Registration</p>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper bg-white">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <slot></slot>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
    </div>
    <!-- /.content-wrapper -->
  </div>
</template>