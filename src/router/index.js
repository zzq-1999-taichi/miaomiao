import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
Vue.use(VueRouter)





export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      // 匹配不到时，路由重定向
      path: '/*',
      redirect: './movie'
    }
  ]
})
