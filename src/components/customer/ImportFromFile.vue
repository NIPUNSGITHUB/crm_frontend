<template>
  <!-- Website Overview -->
  <div class="panel panel-default">
    <div class="panel-heading main-color-bg">
      <h3 class="panel-title">Edit Page</h3>
    </div>
    <div class="panel-body">
      <div>
        <div class="card">
          <img
            class="card-img-top text-center"
            src="../../assets/img/excel-logo.png"
            alt=""
          />
          <div class="form-group mb-4">
            <div class="custom-file text-left">
              <input
                type="file"
                name="file"
                class="btn btn-light"
                @change="uploadExcelFile($event)"
                id="customFile"
              />
              <small></small>
            </div>
          </div>
          <div class="card-body">
            <button
              @click="submitFile"
              class="btn btn-primary btn-block"
            >
              Upload CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      excelFile: "",
    };
  },

  methods: {
    async submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      if (this.file == undefined) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please select a CSV file.",
          showConfirmButton: true, 
        });
      } else if (this.file.name.split(".").pop() != "csv") {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please select a CSV file.",
          showConfirmButton: true,
          
        });
      } else {
        let result = await this.axios
          .post(
            process.env.VUE_APP_API_BaseURL + "customers/import",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then(function (response) {
            return response;
          })
          .catch(function (error) {
            return error;
          });

        if (result.response != undefined && result.response.status == 400) {
          let resultss =
            "Upload result\nAlready:\t" +
            result.data.data["already"] +
            "\nFailed:\t" +
            result.data.data["failed"] +
            "\nInserted:\t" +
            result.data.data["inserted"];
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Customer sucessfully uploaded!\n" + resultss,
            showConfirmButton: true,
          });
        } else if (result.status == 200) {
          let resultss =
            "Upload result\nAlready:\t" +
            result.data.data["already"] +
            "\nFailed:\t" +
            result.data.data["failed"] +
            "\nInserted:\t" +
            result.data.data["inserted"];
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Customer sucessfully uploaded!\n" + resultss,
            showConfirmButton: true,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Customer upload fail",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
    uploadExcelFile(event) {
      this.file = event.target.files[0];
    },
  },
};
</script>
