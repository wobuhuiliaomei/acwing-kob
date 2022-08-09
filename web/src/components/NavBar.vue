<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" :to="{name:'pk'}">King Of Bots</router-link>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :class="route_name=='pk'?'nav-link active':'nav-link'" aria-current="page" :to="{name:'pk'}">对战</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name=='record'?'nav-link active':'nav-link'" :to="{name:'record'}">对局列表</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name=='ranklist'?'nav-link active':'nav-link'" :to="{name:'ranklist'}">排行版</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ">
        <li class="nav-item dropdown">
          <router-link :class="route_name=='userbot'?'nav-link dropdown-toggle active':'nav-link dropdown-toggle'" :to="{name:'userbot'}" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            lyf
          </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{name:'userbot'}">我的Bot</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" :to="{name:'userbot'}">退出</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {useRoute} from "vue-router";
import {computed} from "vue";
export default {
    name:"NavBar",
    setup(){
      const route = useRoute();
      let route_name = computed(()=>route.name);
      return{
        route_name,

      }
    }
}
</script>

<style scoped>

</style>