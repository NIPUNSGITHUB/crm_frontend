<template>
  <!-- Website Overview -->
  <div class="panel panel-default">
    <div class="panel-heading main-color-bg">
      <h3 class="panel-title">Customer Create</h3>
    </div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Page Title"
            value="About"
          />
          <span class="text-danger">dasd</span>
        </div>

        <div class="form-group">
          <label>First Name</label>
          <input type="text" class="form-control" placeholder="First Name" />
          <span class="text-danger">dasd</span>
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input type="text" class="form-control" placeholder="Last Name" />
          <span class="text-danger">dasd</span>
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input type="text" class="form-control" placeholder="Phone Number" />
          <span class="text-danger">dasd</span>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="text" class="form-control" placeholder="Email" />
          <span class="text-danger">dasd</span>
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
export default {
  data() {
    return {
      customer: {
        id: Number,
        title: String,
        first_name: String,
        last_name: String,
        phone_number: String,
        email: String,
        is_active: Boolean,
      },
    };
  },
};
</script>
