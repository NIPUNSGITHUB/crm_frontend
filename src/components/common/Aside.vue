<template>
  <div class="col-md-3">
    <div class="list-group">
      <router-link class="list-group-item active main-color-bg" to="/"
        ><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        Dashboard
      </router-link>
      <router-link class="list-group-item" to="/"
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
  </div>
</template>
