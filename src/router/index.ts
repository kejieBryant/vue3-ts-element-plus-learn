/*
 * @Author: kejie
 * @Date: 2022-04-13 10:23:44
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 15:25:49
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
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
