/*
 * @Author: kejie
 * @Date: 2022-04-13 10:23:44
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-18 15:40:10
 * @FilePath: \vue3-ts-element-plus-learn\src\router\index.ts
 * @Description: file content
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: 'iconChoose',
        component: () => import ('../views/IconChoose/index.vue')
      },
      {
        path: 'areaChoose',
        component: () => import ('../views/AreaChoose/index.vue')
      },
      {
        path: 'trend',
        component: () => import('../views/trend/index.vue')
      },
      {
        path: 'menu',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: 'progress',
        component: () => import('../views/progress/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
