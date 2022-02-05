<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">
        <div class="row">
          <div class="col-lg-6"><h4>Customer List</h4></div>
          <div class="col-lg-6">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name=""
                id="srchValue"
                placeholder="Search.."
                @input="searchCustomers"
              />
            </div>
          </div>
        </div>
      </h3>
    </div>
    <div class="panel-body">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th class="text-center">Active</th>
            </tr>
          </thead>
          <tbody v-if="customers.length > 0" style="height: 15rem">
            <tr v-for="(customer, index) in customers" :key="customer.id">
              <td>{{ index + 1 }}</td>
              <td>{{ customer.title }}</td>
              <td>{{ customer.first_name }}</td>
              <td>{{ customer.last_name }}</td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.phone_number }}</td>
              <td class="text-center">
                <router-link
                  :to="'/manage-customer/' + customer.id"
                  class="btn btn-sm btn-warning"
                >
                  Edit</router-link
                >
                <span class="m-1">&nbsp;</span>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteCustomer(customer.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else style="height: 15rem">
            <tr>
              <td class="text-center" colspan="7">No records found!</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
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
      this.axios
        .get(process.env.VUE_APP_API_BaseURL + "customers")
        .then((response) => {
          this.customers = response.data.data;
        });
    },
    async deleteCustomer(id) {
      var self = this;
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(function (result) {
        if (result.isConfirmed == true) {
          self.axios
            .delete(process.env.VUE_APP_API_BaseURL + "customers/" + id)
            .catch(function () {
              self.getActiveCustomers();
              Swal.fire({
                position: "top-end",
                icon: "Faild",
                title: "Customer delete has been failed.",
                showConfirmButton: false,
                timer: 1500,
              });
            })
            .then(function (res) {
              if (res.status == 200) {
                self.getActiveCustomers();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Customer has been deleted.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              } else {
                self.getActiveCustomers();
                Swal.fire({
                  position: "top-end",
                  icon: "Faild",
                  title: "Customer delete has been failed.",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
    },
    searchCustomers($event) {
      this.axios
        .get(
          process.env.VUE_APP_API_BaseURL +
            "customers/" +
            $event.target.value
        )
        .then((response) => {
          this.customers = response.data.data;
        });
    },
  },
};
</script>
