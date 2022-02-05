<template>
  <div class="col-md-3">
    <div class="list-group">
      <a href="index.html" class="list-group-item active main-color-bg">
        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        Dashboard
      </a>
      <router-link class="list-group-item" to="/index-page"
        ><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
        Customers
      </router-link>

      <router-link :to="'/manage-customer/0'" class="list-group-item"
        ><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        Manage Customers
      </router-link>

      <router-link :to="'/import-from-file'" class="list-group-item"
        ><span class="glyphicon glyphicon-file" aria-hidden="true"></span>
        Import CSV
      </router-link>
    </div>

    <!-- <div class="well">
          <h4>Disk Space Used</h4>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 60%"
            >
              60%
            </div>
          </div>
          <h4>Bandwidth Used</h4>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: 40%"
            >
              40%
            </div>
          </div>
        </div> -->
  </div>
</template>
