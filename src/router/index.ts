/*
 * @Author: kejie
 * @Date: 2022-04-13 10:23:44
 * @LastEditors: kejie
 * @LastEditTime: 2022-04-13 11:18:28
 * @FilePath: \m-comp\src\router\index.ts
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
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
