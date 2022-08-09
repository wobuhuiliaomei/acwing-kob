import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/error/NotFoundView.vue';
import PkIndexView from '@/views/pk/PkIndexView.vue';
import RanklistIndexView from '@/views/ranklist/RanklistIndexView.vue';
import RecordIndexView from '@/views/record/RecordIndexView.vue';
import UserBotIndexView from '@/views/user/bot/UserBotIndexView.vue';


const routes = [
  {
    path:"/ranklist/",
    name:"ranklist",
    component:RanklistIndexView
  },
  {
    path:"/404/",
    name:"404",
    component:NotFoundView,
  },
  {
    path:"/pk/",
    name:"pk",
    component:PkIndexView,
  },
  {
    path:"/record/",
    name:"record",
    component:RecordIndexView,
  },
  {
    path:"/user/bot/",
    name:"userbot",
    component:UserBotIndexView ,
  },
  {
    path:"/",
    name:"home",
    redirect:"/pk/"
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
