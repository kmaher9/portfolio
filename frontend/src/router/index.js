import Vue from 'vue'
import VueRouter from 'vue-router'
import PortfolioHeader from '@/layout/Portfolio.vue'
import FeedHeader from '@/layout/frontend/Feed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      header: PortfolioHeader,
      default: () => import('@/views/Home.vue')
    }
  },
  {
    path: '/frontend/feed',
    name: 'Twitter Feed',
    components: {
      header: FeedHeader,
      default: () => import('@/views/frontend/feed/Feed.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
