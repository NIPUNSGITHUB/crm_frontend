<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Latest Users</h3>
    </div>
    <div class="panel-body">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer,index) in customers" :key="customer.id">
            <td>{{(index+1)}}</td>
            <td>{{customer.title}}</td>
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.phone_number}}</td>
            <td><i class="fa fa-caret-right" aria-hidden="true"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
    };
  },
  mounted() {
    this.getActiveCustomers();
  },
  methods: {
    getActiveCustomers() {
      this.axios.get(process.env.VUE_APP_API_BaseURL + "customers").then((response) => {
           this.customers = response.data.data; 
      }); 
    },
  },
};
</script>
