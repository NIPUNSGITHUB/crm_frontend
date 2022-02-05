<template>
  <!-- Website Overview -->
  <div class="panel panel-default">
    <div class="panel-heading main-color-bg">
      <h3 class="panel-title">
        Customer {{ customer.id == 0 ? "Create" : "Update" }}
      </h3>
    </div>
    <div class="panel-body">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Title</label>
          <select
            class="form-control"
            v-model="customer.title"
            name=""
            id="title"
          >
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>

        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="customer.first_name"
          />
          <small
            class="form-text text-danger"
            v-if="errors != null && errors.first_name != null && fNameIsValid"
            >{{ errors.first_name[0] }}</small
          >
          <small v-if="!fNameIsValid" class="form-text text-danger"
            >The first name feild is required</small
          >
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="customer.last_name"
          />
          <small
            class="form-text text-danger"
            v-if="errors != null && errors.last_name != null && lNameIsValid"
            >{{ errors.last_name[0] }}</small
          >
          <small v-if="!lNameIsValid" class="form-text text-danger"
            >The last name feild is required</small
          >
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            v-model="customer.phone_number"
          />
          <small
            class="form-text text-danger"
            v-if="
              errors != null &&
              errors.phone_number != null &&
              phoneNumberIsValid
            "
            >{{ errors.phone_number[0] }}</small
          >
          <small v-if="!phoneNumberIsValid" class="form-text text-danger"
            >The phone number feild is required</small
          >
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            :disabled="customer.id != 0"
            type="text"
            class="form-control"
            placeholder="Email"
            v-model="customer.email"
          />
          <small
            class="form-text text-danger"
            v-if="errors != null && errors.email != null && emailIsValid"
            >{{ errors.email[0] }}</small
          >
          <small v-if="!emailIsValid" class="form-text text-danger"
            >The email feild is required</small
          >
        </div>
        <input
          type="submit"
          class="btn btn-default text-right"
          value="Submit"
        />
      </form>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      errors: null,
      customer: {
        id: 0,
        title: "Mr",
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        is_active: 1,
      },
    };
  },
  computed: {
    fNameIsValid() {
      return !!this.customer.first_name;
    },

    lNameIsValid() {
      return !!this.customer.last_name;
    },

    phoneNumberIsValid() {
      return typeof this.customer.phone_number == "string";
    },

    emailIsValid() {
      return !!this.customer.email;
    },
    formIsValid() {
      var a =
        this.fNameIsValid &&
        this.lNameIsValid &&
        this.phoneNumberIsValid &&
        this.emailIsValid;

      return a;
    },
  },
  mounted() {
    if (this.$route.params.id != "0") {
      this.getCustomerById(this.$route.params.id);
    }
  },
  methods: {
    submitForm() {
      if (this.formIsValid) {
        this.customer.id == 0
          ? this.createCustomer()
          : this.updateCustomer(this.customer.id);
      } else {
        console.log("Fail");
      }
    },

    async createCustomer() {
      this.errors = null;
      let result = await this.axios
        .post(process.env.VUE_APP_API_BaseURL + "customers", this.customer)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        });

      if (result.response != undefined && result.response.status == 400) {
        this.errors = result.response.data.message; 
      } else if (result.status == 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Customer sucessfully created",
          showConfirmButton: false,
          timer: 1500,
        });
        this.resetCustomer();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Customer create fail",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },

    async updateCustomer(id) {
      this.errors = null;
      let result = await this.axios
        .put(process.env.VUE_APP_API_BaseURL + "customers/" + id, this.customer)
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          return error;
        });

      if (result.response != undefined && result.response.status == 400) {
        this.errors = result.response.data.message; 
      } else if (result.status == 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Customer sucessfully updated",
          showConfirmButton: false,
          timer: 1500,
        });
        this.resetCustomer();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Customer update fail",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },

    getCustomerById(id) {
      this.axios
        .get(process.env.VUE_APP_API_BaseURL + "customer/" + id)
        .then((response) => {
          this.customer = response.data.data[0];
          console.log(this.customer);
        });
    },

    resetCustomer() {
      this.customer.id = 0;
      this.customer.title = "Mr";
      this.customer.first_name = "";
      this.customer.last_name = "";
      this.customer.phone_number = "";
      this.customer.email = "";
      this.customer.is_active = 1;
    },
  },
};
</script>
