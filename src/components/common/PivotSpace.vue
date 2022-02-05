<template>
  <div class="container">
    <div class="row">
      <Aside></Aside>
      <div class="col-md-9"> 
           <router-view></router-view>       
      </div>
    </div>
  </div>
</template>
<script>
import Aside from "../common/Aside.vue";
export default {
  name: "PivotSpace",
  components: {
      Aside
  },
};
</script>
