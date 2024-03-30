import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Addjob from '@/components/Addjob.vue'
import ListStaff from '@/views/ListStaff.vue'
import JobEdit from '@/components/JobEdit.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addjob',
    name: 'addjob',
    component: Addjob
  },
  {
    path: '/liststaff',
    name: 'liststaff',
    component: ListStaff
  },
  {
    path: '/edit/:id',
    name: 'edit',
    props: true,
    component: JobEdit
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
