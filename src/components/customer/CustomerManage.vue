<template>
  <!-- Website Overview -->
  <div class="panel panel-default">
    <div class="panel-heading main-color-bg">
      <h3 class="panel-title">Customer Create</h3>
    </div>
    <div class="panel-body">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Title</label> 
            <select class="form-control" v-model="customer.title" name="" id="title">
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
          <!-- <span class="text-danger" v-if="errors != null">{{ errors.last_name[0] }}</span> -->
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
        first_name: "nipun",
        last_name: "gdf",
        phone_number: "gdfg",
        email: "dfgdfg",
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
        console.log(this.errors);
      } else if (result.status == 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Customer sucessfully created",
          showConfirmButton: false,
          timer: 1500,
        });
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
    updateCustomer(id) {
      console.log(id);
    },
  },
};
</script>
