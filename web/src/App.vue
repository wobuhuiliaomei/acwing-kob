<template>
  <!-- <div>{{abc}}</div> -->
  <NavBar/>
  <router-view/>
</template>


<script>

import NavBar from "./components/NavBar.vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

export default {
  name:"app",
  components:{
    NavBar,

  }

}
</script>

<style>
body{
  background-image: url("@/assets/images/123.png");
  background-size: cover;
}
</style>
