<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand">CRM</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a>Dashboard</a></li>
            <li><a>Pages</a></li>
            <li><a>Posts</a></li>
            <li><a>Users</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a>Welcome, Brad</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <SiteHeader></SiteHeader>
    <section id="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li class="active">Dashboard</li>
        </ol>
      </div>
    </section>
    <section id="main">
      <PivotSpace></PivotSpace>
    </section>
    <SiteFooter></SiteFooter>
  </div>
</template>

<script>
import PivotSpace from "./components/common/PivotSpace.vue";
import SiteHeader from "./components/common/SiteHeader.vue";
import SiteFooter from "./components/common/SiteFooter.vue";

import "jquery/src/jquery.js";
import "/src/assets/css/bootstrap.min.css";
import "/src/assets/css/style.css";
import "/src/assets/js/bootstrap.min.js";

export default {
  name: "App",
  components: {
    PivotSpace,
    SiteHeader,
    SiteFooter,
  },
};
</script>

<style></style>
