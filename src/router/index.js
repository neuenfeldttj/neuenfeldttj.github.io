import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomeView.vue'
import About from '../components/AboutView.vue'
import Projects from '../components/ProjectsView.vue'
import Resume from '../components/ResumeView.vue'
import Contact from '../components/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router